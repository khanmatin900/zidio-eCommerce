import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";
import { Address } from "../models/address.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/asyncHandler.js";


const createOrder = AsyncHandler(async (req, res) => {
  const { products, paymentMethod, shippingAddress, paymentStatus } = req.body;

  if (!products || !products.length) {
    throw new ApiError(400, "Products are required");
  }

  if (!paymentMethod) {
    throw new ApiError(400, "Payment method is required");
  }

  if (!shippingAddress) {
    throw new ApiError(400, "Shipping address is required");
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const address = await Address.findById(shippingAddress);
  if (!address) {
    throw new ApiError(404, "Shipping address not found");
  }

  const orderProducts = await Product.find({ _id: { $in: products } });
  if (orderProducts.length !== products.length) {
    throw new ApiError(404, "Some products not found");
  }

  if (products.length > 1) {
    products.map(async (product) => {
      let totalAmount = product.price * product.quantity;
      let order = await Order.create({
        userId: user._id,
        product_id: product._id,
        quantity: product.quantity,
        paymentMethod,
        shippingAddress: address._id,
        totalAmount,
        paymentStatus: paymentStatus,
        orderStatus: "pending",
      });
      if (!order) {
        throw new ApiError(404, "Order not created");
      }
    });
  } else {
    let order = await Order.create({
      userId: user._id,
      products: orderProducts,
      paymentMethod,
      shippingAddress: address._id,
      totalAmount,
      paymentStatus: paymentStatus,
      orderStatus: "pending",
    });
    if (!order) {
      throw new ApiError(404, "Order not created");
    }
  }

  return res.status(201).json(new ApiResponse(201, "Order confirmed"));
});

const getUserOrders = AsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(req.user._id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const orders = await Order.aggregate([
    { $match: { userId } },
    {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    {
      $unwind: {
        path: "$productDetails",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 1,
        userId: 1,
        product_id: 1,
        quantity: 1,
        paymentMethod: 1,
        shippingAddress: 1,
        totalAmount: 1,
        paymentStatus: 1,
        orderStatus: 1,
        createdAt: 1,
        updatedAt: 1,
        productDetails: {
          _id: 1,
          name: 1,
          price: 1,
          description: 1,
          category: 1,
        },
      },
    },
  ]);

  if (!orders.length) {
    throw new ApiError(404, "No orders found for this user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "User orders retrieved", orders));
});

const getOrderDetails = AsyncHandler(async (req, res) => {
const { orderId } = req.params;
const userId = req.user._id;

const orderDetails = await Order.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(orderId), userId: new mongoose.Types.ObjectId(userId) } },
    {
        $lookup: {
            from: "products",
            localField: "product_id",
            foreignField: "_id",
            as: "productDetails",
        },
    },
    {
        $unwind: {
            path: "$productDetails",
            preserveNullAndEmptyArrays: true,
        },
    },
    {
        $lookup: {
            from: "addresses",
            localField: "shippingAddress",
            foreignField: "_id",
            as: "shippingAddressDetails",
        },
    },
    {
        $unwind: {
            path: "$shippingAddressDetails",
            preserveNullAndEmptyArrays: true,
        },
    },
    {
        $project: {
            _id: 1,
            userId: 1,
            product_id: 1,
            quantity: 1,
            paymentMethod: 1,
            shippingAddress: "$shippingAddressDetails",
            totalAmount: 1,
            paymentStatus: 1,
            orderStatus: 1,
            createdAt: 1,
            updatedAt: 1,
            productDetails: {
                _id: 1,
                name: 1,
                price: 1,
                description: 1,
                category: 1,
                discount: 1,
            },
        },
    },
]);

if (!orderDetails.length) {
    throw new ApiError(404, "Order not found");
}

return res.status(200).json(new ApiResponse(200, "Order details", orderDetails[0]));
}
);



