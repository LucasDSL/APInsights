import app from "./Configs/app"
import * as dontenv from "dotenv"
dontenv.config()

app.listen(process.env.PORT || 3000, () => {
  console.log(`Running on port ${process.env.PORT}`)
})
