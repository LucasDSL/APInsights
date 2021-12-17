import express from "express"
import { pool } from "../Infrastructure/dbPool"

export const design_getOneItem = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()
    const designItem = await conn.query(
      `SELECT * FROM links WHERE Id=${req.params.id} && Category='design'`
    )

    if (designItem.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(designItem)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}

export const design_getAllItems = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()

    const designItems = await conn.query(
      `SELECT * FROM links WHERE Category='design'`
    )

    if (designItems.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(designItems)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}
