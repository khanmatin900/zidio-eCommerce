import { Router } from "express";
import {
  createReview,
  editReview,
  deleteReview,
  getAllReviews,
  deleteReviewAdmin,
} from "../controller/review.controller.js";
const router = Router();
import { VerifyJwtToken, verifyAdmin } from "../libs/auth.helpers.js";

router.post("/", VerifyJwtToken, createReview);
router.put("/:id", VerifyJwtToken, editReview);
router.delete("/:id", VerifyJwtToken, deleteReview);
router.get("/", getAllReviews);
router.delete("/admin/:id", VerifyJwtToken, verifyAdmin, deleteReviewAdmin);

export default router;

