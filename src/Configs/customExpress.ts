import express from "express"
import cors from "cors"
import Tables from "../Infrastructure/Tables"
import FrontendRoutes from "../Routes/Frontend.routes"
import BackendRoutes from "../Routes/Backend.routes"
import MobileRouter from "../Routes/Mobile.routes"
import DesignRoutes from "../Routes/Design.routes"
import MixRoutes from "../Routes/Mix.routes"
import GeneralRoutes from "../Routes/General.routes"

export default async function customExpress() {
  const app = express()
  app.use(express.json())
  app.use(cors())
  await Tables.createLinks()
  app.use(DesignRoutes)
  app.use(MixRoutes)
  app.use(FrontendRoutes)
  app.use(BackendRoutes)
  app.use(MobileRouter)
  app.use(GeneralRoutes)
  return app
}
