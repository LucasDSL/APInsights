import express from "express"
import { mix_getOneItem, mix_getAllItems } from "../Controllers/Mix.controller"

const router = express.Router()
router.get("/insight/mix/:id", mix_getOneItem)
router.get("/insight/mix", mix_getAllItems)

export default router
