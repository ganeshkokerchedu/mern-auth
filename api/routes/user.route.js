import express from "express";
import {test,updateUser, deleteUser , signout} from "../controllers/user.controller.js";
//import { verifyToken } from "../utils/varifyUser.js";
const router = express.Router();

router.get("/", test);
router.post("/update/:id",  updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/signout", signout);
export default router;