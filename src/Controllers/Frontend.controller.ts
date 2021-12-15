import express from "express"
import { pool } from "../database/dbPool"

export const front_getOneItem = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()

    const frontEndItem = await conn.query(
      `SELECT * FROM links WHERE Id=${req.params.id} && Category='front'`
    )

    if (frontEndItem.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(frontEndItem)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}

export const front_getAllItems = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  try {
    conn = await pool.getConnection()

    const frontEndItems = await conn.query(
      `SELECT * FROM links WHERE Category='front'`
    )

    if (frontEndItems.length === 0) {
      res.sendStatus(404)
      return conn.end()
    }

    res.json(frontEndItems)
    res.sendStatus(200)
  } catch (err) {
    return res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}
