import queries from "../Infrastructure/queries"

class MixRepository {
  getAllItems() {
    const sql = `SELECT * FROM links WHERE Category='mix'`
    return queries(sql)
  }

  getOneItem(id: string) {
    const sql = `SELECT * FROM links WHERE Category='mix' && Id=? `
    return queries(sql, id)
  }
}

export default new MixRepository()
