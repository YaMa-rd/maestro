const mysql = require("mysql");
const config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "maestro",
};

class MysqlUtilities {
  getAdmin(callback) {
    //on definit la connexion
    let connection = mysql.createConnection(config);
    //on lance la connexion
    connection.connect();
    //on envoie la query
    connection.query(`SELECT * FROM admin`, (error, results) => {
      console.log("test");
      callback(results, error);
      res.send(results);
    });
    // on ferme la connexion
    connection.end();
  }
}

module.exports = new MysqlUtilities();
