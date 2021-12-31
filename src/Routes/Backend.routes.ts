import express from "express"
import backendController from "../Controllers/Backend.controller"

const router = express.Router()
router.get("/insight/back-end/:id?", backendController)

export default router
