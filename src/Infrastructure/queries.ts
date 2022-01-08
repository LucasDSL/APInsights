import { pool } from "./dbPool"

export default async function queryExecution(
  query: string,
  params: string | string[] = ""
) {
  let conn, result
  try {
    conn = await pool.getConnection()
    result = await conn.query(query, params)
  } catch (error) {
    return error
  } finally {
    if (conn) {
      conn.end()
    }
    return result
  }
}
