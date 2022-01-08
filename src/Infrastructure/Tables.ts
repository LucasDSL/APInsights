import queryExecution from "./queries"
class Tables {
  async createLinks() {
    const sql = `CREATE TABLE IF NOT EXISTS links (
            Id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            Title varchar(100) NOT NULL, 
            Category varchar(10) NOT NULL,
            Description varchar(1000) NOT NULL,
            Link varchar(500) NOT NULL,
            Image_Link varchar(500) NOT NULL
        );`
    let queryResult
    try {
      queryResult = await queryExecution(sql)
    } catch (error) {
      return error
    } finally {
      return
    }
  }
}

export default new Tables()
