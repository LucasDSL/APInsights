import express from "express"
import frontendController from "../Controllers/Frontend.controller"

const router = express.Router()
router.get("/insight/front-end/:id?", frontendController)
export default router
