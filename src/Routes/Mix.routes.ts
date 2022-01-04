import express from "express"
import mixController from "../Controllers/Mix.controller"

const router = express.Router()
router.get("/insight/mix/:id?", mixController)
export default router
