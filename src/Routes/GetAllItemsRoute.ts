import express from "express"
import { getAllItems } from "../Controllers/GetAllItems.controller"

const router = express.Router()
router.get("/", getAllItems)
router.get("/insight", getAllItems)

export default router
