const mysql = require('mysql');
const { promisify } = require('util');

class DB {
  constructor(
    host = 'db',
    user = 'root',
    password = 'root',
    database = 'nodedb'
  ) {
    this.dbConfig ={
      host,
      user,
      password,
      database
    };
  }

  async exec(sql) {
    let result;
    let connection;

    try {
      connection = await mysql.createConnection(this.dbConfig);
      const query = promisify(connection.query).bind(connection);

      result = await query(sql);
    } catch (error) {
      console.log(error);
    } finally {
      if (connection.end) {
        connection.end();
      }
    }
    
    return result;
  }
}

module.exports = DB;