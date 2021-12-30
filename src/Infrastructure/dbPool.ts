import { createPool } from "mariadb"
import * as dontenv from "dotenv"
dontenv.config()
import { dbConfig } from "../Configs/dbConfig"

export const pool = createPool({
  host: dbConfig.HOST_NAME,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
})
