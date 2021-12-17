import express from "express"
import { pool } from "../Infrastructure/dbPool"

export const mix_getOneItem = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()
    const mixItem = await conn.query(
      `SELECT * FROM links WHERE Id=${req.params.id} && Category='mix'`
    )

    if (mixItem.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(mixItem)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}

export const mix_getAllItems = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()

    const mixItems = await conn.query(
      `SELECT * FROM links WHERE Category='mix'`
    )

    if (mixItems.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(mixItems)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}
