import express from "express";
import { createOffice, deleteOffice, getOffice, getOfficeResources, getOffices, updateOffice } from "../controllers/office.js";
import Offices from "../models/Offices.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/", verifyAdmin, createOffice);
//UPDATE
router.put("/:id", verifyAdmin, updateOffice);
//DELETE
router.delete("/:id", verifyAdmin, deleteOffice);
//GET
router.get("/find/:id", getOffice);
//GET ALL
router.get("/", getOffices);

//GET SEAT
router.get("/resources/:id", getOfficeResources);

export default router