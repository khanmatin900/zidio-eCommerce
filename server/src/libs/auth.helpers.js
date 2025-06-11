import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { AsyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
//generate hashed password
const GenerateHashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

//compare hashed password
const CompareHashedPassword = async (password, oldPassword) => {
  return await bcrypt.compare(password, oldPassword);
};

//encode jwt token
const encodeAuthToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

//decode jwt token
const VerifyJwtToken = AsyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.authToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "Not Authorized !");
    }

    let decodeJwtToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodeJwtToken) {
      throw new ApiError(500, "Internal server error while verifying token !");
    }
    const user = await User.findById(decodeJwtToken?._id).select("-password");
    if (!user) {
      throw new ApiError(409, "Invalid authentication credentials !");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(409, error.message || "Invalid Authentications !");
  }
});

//verify admin
const verifyAdmin = AsyncHandler(async (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new ApiError(403, "You are not authorized to perform this action !");
  }
  next();
});


// Generate OTP
const generateOTP = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

export {
  GenerateHashedPassword,
  CompareHashedPassword,
  encodeAuthToken,
  VerifyJwtToken,
  generateOTP,
  verifyAdmin
};
