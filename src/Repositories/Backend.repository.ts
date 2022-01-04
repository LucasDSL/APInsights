import queries from "../Infrastructure/queries"
class Backend {
  getOneItem(id: string) {
    const sql = 
    `SELECT * FROM links WHERE Id=? && (Category='back' OR Category='back-end')`
    return queries(sql, id)
  }

  getAllItems() {
    const sql = 
    `SELECT * FROM links WHERE Category='back' OR Category='back-end'`
    return queries(sql)
  }
}

export default new Backend()
