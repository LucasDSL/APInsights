import express from "express"
import {
  getGeneralController,
  postGeneralController,
} from "../Controllers/General.controller"

const router = express.Router()
router.get("/insight/:id?", getGeneralController)
router.post("/insight", postGeneralController)
router.get("/", getGeneralController)
export default router
