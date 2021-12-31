import express from "express"
import designController from "../Controllers/Design.controller"

const router = express.Router()
router.get("/insight/design/:id?", designController)
export default router
