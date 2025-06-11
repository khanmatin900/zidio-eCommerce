import { Router } from "express";

import { VerifyJwtToken } from "../libs/auth.helpers.js";
import {
  createOrder,
  getUserOrders,
  getOrderDetails,
  updateOrderStatus,
  cancelOrder,
  getAllOrders,
  getOrdersByStatus,
} from "../controller/order.controller.js";
const router = Router();

router.route("/create").post(VerifyJwtToken, createOrder);
router.route("/user/:userId").get(VerifyJwtToken, getUserOrders);
router.route("/details/:orderId").get(VerifyJwtToken, getOrderDetails);
router.route("/update/:orderId").put(VerifyJwtToken, updateOrderStatus);
router.route("/cancel/:orderId").put(VerifyJwtToken, cancelOrder);
router.route("/").get(VerifyJwtToken, getAllOrders);
router.route("/status/:status").get(VerifyJwtToken, getOrdersByStatus);

export default router;
