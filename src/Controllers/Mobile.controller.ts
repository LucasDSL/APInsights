import express from "express"
import { pool } from "../Infrastructure/dbPool"

export const mobile_getOneItem = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()

    const mobileItem = await conn.query(
      `SELECT * FROM links WHERE Id=${req.params.id} && Category='mobile'`
    )

    if (mobileItem.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(mobileItem)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}

export const mobile_getAllItems = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()

    const mobileItems = await conn.query(
      `SELECT * FROM links WHERE Category='mobile'`
    )

    if (mobileItems.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(mobileItems)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}
