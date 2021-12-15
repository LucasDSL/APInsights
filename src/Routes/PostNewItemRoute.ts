import express from "express"
import { addNewItem } from "../Controllers/PostNewItem.controller"

const router = express.Router()

const postNewItem = router.post("/insight", addNewItem)

export default router
