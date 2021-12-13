import express from "express"
import cors from "cors"

import FrontendRoutes from "./Routes/FrontendRoutes"

const app = express()
app.use(express.json())
app.use(cors())

// Routes
app.use(FrontendRoutes)

export default app
