import express from "express"
import {
  getOneItem,
  getAllItems,
} from "../Controllers/FrontendController"

const router = express.Router()

const getOneFrontend = router.get("/insight/front-end/:id", getOneItem)

const getAllFrontend = router.get("/insight/front-end", getAllItems)

export default router
