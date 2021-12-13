import express from "express"
import {
  front_getOneItem,
  front_getAllItems,
  front_addNewItem,
} from "../Controllers/FrontendController"

const router = express.Router()

const getOneFrontend = router.get("/insight/front-end/:id", front_getOneItem)

const getAllFrontend = router.get("/insight/front-end", front_getAllItems)

const addNewFrontend = router.post("/insight/front-end", front_addNewItem)

export default router
