import express from "express"
import MixController from "../Controllers/Mix.controller"

const router = express.Router()
router.get("/insight/mix/:id?", MixController)
export default router
