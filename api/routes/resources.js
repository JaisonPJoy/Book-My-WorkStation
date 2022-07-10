import express from "express";
import { createRresource, deleteResource, getResource, getResources, updateResource, updateResourcesAvailability } from "../controllers/resources.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();
//CREATE
router.post("/:officeid", verifyAdmin, createRresource);
//UPDATE
router.put("/:id", verifyAdmin, updateResource);
//DELETE
router.delete("/:id", verifyAdmin, deleteResource);
//GET
router.get("/:id", getResource);
//GET ALL
router.get("/", getResources);
// AVAILABILITY
router.put("availability/:id", updateResourcesAvailability);

export default router