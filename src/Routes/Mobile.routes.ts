import express from "express"
import mobileController from "../Controllers/Mobile.controller"

const router = express.Router()
router.get("/insight/mobile/:id?", mobileController)
export default router
