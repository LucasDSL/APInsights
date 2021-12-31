import queries from "../Infrastructure/queries"

class Design {
  getOneItem(id: string) {
    const sql = `SELECT * FROM links WHERE Id=? && Category='design'`
    return queries(sql, id)
  }

  getAllItems() {
    const sql = `SELECT * FROM links WHERE Category='design'`
    return queries(sql)
  }
}

export default new Design()
