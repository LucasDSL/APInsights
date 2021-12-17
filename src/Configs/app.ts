import express from "express"
import cors from "cors"

import FrontendRoutes from "../Routes/FrontendRoutes"
import BackendRoutes from "../Routes/BackendRoutes"
import PostNewItemRoute from "../Routes/PostNewItemRoute"
import MobileRouter from "../Routes/MobileRoutes"
import getAllItems from "../Routes/GetAllItemsRoute"
import DesignRoutes from "../Routes/DesignRoutes"
import MixRoutes from "../Routes/MixRoutes"

const app = express()
app.use(express.json())
app.use(cors())

app.use(FrontendRoutes)
app.use(BackendRoutes)
app.use(MobileRouter)
app.use(getAllItems)
app.use(PostNewItemRoute)
app.use(DesignRoutes)
app.use(MixRoutes)

export default app
