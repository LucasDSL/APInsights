import express from "express"
import {
  mobile_getOneItem,
  mobile_getAllItems,
} from "../Controllers/Mobile.controller"

const router = express.Router()
router.get("/insight/mobile/:id", mobile_getOneItem)
router.get("/insight/mobile", mobile_getAllItems)

export default router
