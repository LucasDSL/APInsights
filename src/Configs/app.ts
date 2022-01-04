import express from "express"
import cors from "cors"

import FrontendRoutes from "../Routes/Frontend.routes"
import BackendRoutes from "../Routes/Backend.routes"
import MobileRouter from "../Routes/Mobile.routes"
import DesignRoutes from "../Routes/Design.routes"
import MixRoutes from "../Routes/Mix.routes"
import GeneralRoutes from "../Routes/General.routes"

const app = express()
app.use(express.json())
app.use(cors())

app.use(DesignRoutes)
app.use(MixRoutes)
app.use(FrontendRoutes)
app.use(BackendRoutes)
app.use(MobileRouter)
app.use(GeneralRoutes)

export default app
