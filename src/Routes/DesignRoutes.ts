import express from "express"
import {
  design_getAllItems,
  design_getOneItem,
} from "../Controllers/Design.controller"
import { getAllItems } from "../Controllers/GetAllItems.controller"

const router = express.Router()
router.get("/insight/design", design_getAllItems)
router.get("/insight/design/:id", design_getOneItem)

export default router 