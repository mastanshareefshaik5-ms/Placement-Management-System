import express from "express";
import { getCompany } from "../controllers/companyController.js"

const router = express.Router();

//get all company
router.get("/",getCompany);
export default router