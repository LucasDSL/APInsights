import queries from "../Infrastructure/queries"

class GeneralRepository {
  getOneItem(id: string) {
    const sql = `SELECT * FROM links WHERE Id=?`
    return queries(sql, id)
  }

  getAllitems() {
    const sql = `SELECT * FROM links`
    return queries(sql)
  }

  postNewItem(setInsert: string[]) {
    const sql = `INSERT INTO links 
    (Title, Category, Description, Image_Link, Link) 
    VALUES (?, ?, ?, ?, ?)`
    return queries(sql, setInsert)
  }
}

export default new GeneralRepository()
