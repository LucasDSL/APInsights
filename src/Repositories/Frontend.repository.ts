import queries from "../Infrastructure/queries"
class FrontendRepository {
  getOneItem(id: string) {
    const sql = `SELECT * FROM links WHERE Id=? && Category='front'`
    return queries(sql, id)
  }

  getAllItems() {
    const sql = `SELECT * FROM links WHERE Category='front'`
    return queries(sql)
  }
}

export default new FrontendRepository()
