import customExpress from "./Configs/customExpress"
import * as dontenv from "dotenv"
dontenv.config()
async function server() {
    const app = await customExpress()
    app.listen(process.env.PORT)
}

server()