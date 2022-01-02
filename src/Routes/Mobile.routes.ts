import express from "express"
import MobileController from "../Controllers/Mobile.controller"

const router = express.Router()
router.get("/insight/mobile/:id?", MobileController)
export default router
