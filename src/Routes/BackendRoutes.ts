import express from "express"
import {
  back_getOneItem,
  back_getAllItems,
} from "../Controllers/Backend.controller"

const router = express.Router()

const getOneBackend = router.get("/insight/back-end/:id", back_getOneItem)

const getAllBackend = router.get("/insight/back-end", back_getAllItems)

export default router
