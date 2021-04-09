const mysql = require("mysql");
const config = {
  host: "localhost",
  user: "root",
  password: "",
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
<<<<<<< Updated upstream

  postApprenant(callback, user) {
    let connection = mysql.createConnection(config);
    connection.connect();
    connection.query(
      `INSERT INTO apprenant (nom, motdepasse, image, mail, age, genre) VALUES (?,?,?,?,?,?)`,
      [user.nom, user.motdepasse, user.image, user.mail, user.age, user.genre],
      (error, results) => {
        console.log("test");
        callback(results, error);
        res.send(results);
      }
    );
    connection.end();
  }
}
=======
  //// -----------admin/mail-------------/////
  getAdminByMail(callback){
    let connection = mysql.createConnection(config);
    //on lance la connexion
    connection.connect();
    //on envoie la query
    connection.query(`SELECT mail FROM admin`,[mail] ,(error, results) => {
      console.log("test");
      callback(results, error);
      res.send(results);
    });
    // on ferme la connexion
    connection.end();
  };
  ////-----------apprenant---------------////
  getApprenant(callback){
    let connection = mysql.createConnection(config);
    //on lance la connexion
    connection.connect();
    //on envoie la query
    connection.query(`SELECT*FROM apprenant`, (error, results) => {
      console.log("test");
      callback(results, error);
      res.send(results);
    });
    // on ferme la connexion
    connection.end();
  };
  
};
>>>>>>> Stashed changes

module.exports = new MysqlUtilities();
