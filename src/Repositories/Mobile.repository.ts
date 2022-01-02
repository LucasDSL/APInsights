import queries from "../Infrastructure/queries"

class MobileRepository {
  getAllItems() {
    const sql = `SELECT * FROM links`
    return queries(sql)
  }

  getOneItem(id: string) {
    const sql = `SELECT * FROM links WHERE Category='mobile' && id=?`
    return queries(id)
  }
}

export default new MobileRepository()
