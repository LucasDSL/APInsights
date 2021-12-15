import express from "express"
import { addNewItem } from "../Controllers/PostNewItem.controller"

const router = express.Router()
router.post("/insight", addNewItem)

export default router
