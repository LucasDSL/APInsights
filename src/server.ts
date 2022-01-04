import app from "./Configs/app"
import * as dontenv from "dotenv"
dontenv.config()

app.listen(process.env.PORT, () =>
  console.log("running on port", process.env.PORT)
)
