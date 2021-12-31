import express from "express"
import {
  back_getOneItem,
  back_getAllItems,
} from "../Controllers/Backend.controller"

const router = express.Router()
router.get("/insight/back-end/:id", back_getOneItem)
router.get("/insight/back-end", back_getAllItems)

export default router
