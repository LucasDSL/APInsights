import queries from "../Infrastructure/queries"

class GeneralRepository {
  getAllitems() {
    const sql = `SELECT * FROM links`
    return queries(sql)
  }

  postNewItem(setInsert: string[]) {
    const sql = `INSERT INTO links 
    (Category, Image_Link, Link, Description) 
    VALUES (?, ?, ?, ?)`
    return queries(sql, setInsert)
  }
}

export default new GeneralRepository()
