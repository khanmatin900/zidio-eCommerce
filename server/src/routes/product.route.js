import {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductsByType,
  getProductByQuery,
} from "../controller/product.controller.js";
import { Router } from "express";
const router = Router();
import { VerifyJwtToken, verifyAdmin } from "../libs/auth.helpers.js";
import { upload } from "../middlewares/Multer.middleware.js";
router
  .route("/create")
  .post(VerifyJwtToken, verifyAdmin, upload.array("image", 10), createProduct);
router
  .route("/update/:productId")
  .put(VerifyJwtToken, verifyAdmin, upload.array("image", 10), updateProduct);
router
  .route("/delete/:productId")
  .delete(VerifyJwtToken, verifyAdmin, deleteProduct);
router.route("/").get(VerifyJwtToken, verifyAdmin, getAllProducts);
router
  .route("/product/:productId")
  .get(VerifyJwtToken, VerifyJwtToken, verifyAdmin, getProductById);
router
  .route("/type/:type")
  .get(VerifyJwtToken, VerifyJwtToken, verifyAdmin, getProductsByType);
router
  .route("/query")
  .get(VerifyJwtToken, VerifyJwtToken, verifyAdmin, getProductByQuery);

export default router;
