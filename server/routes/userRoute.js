// userRoute.js
import express from 'express';
const router = express.Router();

import {
  getAllUsers,
  create,
  getUserById,
  update,
  deleteUser
} from "../controller/userController.js";

// ✅ Remove "/api" from routes
router.get("/user", getAllUsers);
router.post("/user", create);
router.get("/user/:id", getUserById);
router.put("/update/user/:id", update);
router.delete("/delete/user/:id", deleteUser);

export default router;
