import express from "express"
import { pool } from "../Infrastructure/dbPool"

export const addNewItem = async (
  req: express.Request,
  res: express.Response
) => {
  let conn
  const { category, imageLink, description, link } = req.body
  try {
    conn = await pool.getConnection()

    const resultFromInsertion = await conn.query(
      `INSERT INTO links (Category, Image_Link, Description, Link)
        VALUES (?, ?, ?, ?)`,
      [category, imageLink, description, link]
    )

    res.json(resultFromInsertion)
    res.sendStatus(200)
  } catch (err) {
    res.sendStatus(400).json({ error: err })
  } finally {
    if (conn) {
      return conn.end()
    }
  }
}
