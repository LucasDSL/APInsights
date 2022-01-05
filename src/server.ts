import customExpress from "./Configs/customExpress"
import * as dontenv from "dotenv"
dontenv.config()
const app = customExpress()
app.listen(process.env.PORT)
