import { createPool } from "mariadb"
import * as dontenv from "dotenv"
dontenv.config()

export const pool = createPool({
  host: process.env.HOST_NAME,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
})