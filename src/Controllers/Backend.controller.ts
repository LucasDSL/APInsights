import express from "express"
import { pool } from "../Infrastructure/dbPool"

export const back_getOneItem = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()
    const backEndItem = await conn.query(
      `SELECT * FROM links WHERE Id=${req.params.id} && Category='back'`
    )

    if (backEndItem.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(backEndItem)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}

export const back_getAllItems = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()

    const backEndItems = await conn.query(
      `SELECT * FROM links WHERE Category='back'`
    )

    if (backEndItems.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(backEndItems)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}
