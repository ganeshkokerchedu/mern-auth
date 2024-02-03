import express from "express";
import {test,updateUser, deleteUser } from "../controllers/user.controller.js";
import { getUserListings } from "../controllers/user.controller.js";
//import { verifyToken } from "../utils/varifyUser.js";
const router = express.Router();

router.get("/", test);
router.post("/update/:id",  updateUser);
router.delete("/delete/:id", deleteUser);
router.get('/listings/:id',  getUserListings);
export default router;