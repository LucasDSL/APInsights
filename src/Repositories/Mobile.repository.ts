import queries from "../Infrastructure/queries"

class MobileRepository {
  getAllItems() {
    const sql = `SELECT * FROM links WHERE Category='mobile'`
    return queries(sql)
  }

  getOneItem(id: string) {
    const sql = `SELECT * FROM links WHERE Category='mobile' && id=?`
    return queries(sql, id)
  }
}

export default new MobileRepository()
