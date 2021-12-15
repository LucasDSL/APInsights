import express from "express"
import {
  front_getOneItem,
  front_getAllItems,
} from "../Controllers/Frontend.controller"

const router = express.Router()

const getOneFrontend = router.get("/insight/front-end/:id", front_getOneItem)

const getAllFrontend = router.get("/insight/front-end", front_getAllItems)

export default router
