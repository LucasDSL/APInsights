import express from "express"
import {
  getGeneralController,
  postGeneralController,
  deleteGeneralController
} from "../Controllers/General.controller"

const router = express.Router()
router.get("/insight/:id?", getGeneralController)
router.post("/insight", postGeneralController)
router.get("/", getGeneralController)
router.delete("/insight/:id", deleteGeneralController)
export default router
