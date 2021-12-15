import express from "express"
import { pool } from "../database/dbPool"

export const getAllItems = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()

    const resultFromSelect = await conn.query("SELECT * FROM links")
    if (resultFromSelect.length === 0) {
      res.json({ error: "no item found" })
      return conn.end()
    }

    res.json(resultFromSelect)
    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}
