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
    });
    // on ferme la connexion
    connection.end();
  }

  //// -----------admin/mail-------------/////
  getAdminByMail(callback, mail) {
    let connection = mysql.createConnection(config);
    //on lance la connexion
    connection.connect();
    //on envoie la query
    connection.query(
      `SELECT * FROM admin WHERE mail=(?) `,
      [mail],
      (error, results) => {
        console.log("test");
        callback(results, error);
      }
    );
    // on ferme la connexion
    connection.end();
  }
  ////-----------apprenant---------------////
  getApprenant(callback) {
    let connection = mysql.createConnection(config);
    //on lance la connexion
    connection.connect();
    //on envoie la query
    connection.query(`SELECT*FROM apprenant`, (error, results) => {
      console.log("test");
      callback(results, error);
    });
    // on ferme la connexion
    connection.end();
  }
  getApprenantByMail(callback, mail) {
    let connection = mysql.createConnection(config);
    //on lance la connexion
    connection.connect();
    //on envoie la query
    connection.query(
      `SELECT * FROM apprenant WHERE mail=(?) `,
      [mail],
      (error, results) => {
        console.log("test");
        callback(results, error);
      }
    );
    // on ferme la connexion
    connection.end();
  }
  getEnseignant(callback) {
    //on definit la connexion
    let connection = mysql.createConnection(config);
    //on lance la connexion
    connection.connect();
    //on envoie la query
    connection.query(`SELECT * FROM enseignant`, (error, results) => {
      console.log("test");
      callback(results, error);
    });
    // on ferme la connexion
    connection.end();
  }
  getEnseignantByMail(callback, mail) {
    let connection = mysql.createConnection(config);
    //on lance la connexion
    connection.connect();
    //on envoie la query
    connection.query(
      `SELECT * FROM enseignant WHERE mail=(?) `,
      [mail],
      (error, results) => {
        console.log("test");
        callback(results, error);
      }
    );
    // on ferme la connexion
    connection.end();
  }

  postApprenant(callback, user) {
    let connection = mysql.createConnection(config);
    connection.connect();
    connection.query(
      `INSERT INTO apprenant (nom, motdepasse, image, mail, age, genre) VALUES (?,?,?,?,?,?)`,
      [user.nom, user.motdepasse, user.image, user.mail, user.age, user.genre],
      (error, results) => {
        console.log("test");
        callback(results, error);
      }
    );
    connection.end();
  }

  postEnseignant(callback, user) {
    let connection = mysql.createConnection(config);
    connection.connect();
    connection.query(
      `INSERT INTO enseignant (nom, motdepasse, image, mail, age, genre) VALUES (?,?,?,?,?,?)`,
      [user.nom, user.motdepasse, user.image, user.mail, user.age, user.genre],
      (error, results) => {
        console.log("test");
        callback(results, error);
      }
    );
    connection.end();
  }

  deleteApprenant(callback, params) {
    let connection = mysql.createConnection(config);
    connection.connect();
    connection.query(
      "DELETE FROM apprenant WHERE mail = (?)",
      [params],
      (error, results) => {
        console.log("je t'efface");
        callback(results, error);
      }
    );
    connection.end();
  }

  deleteEnseignant(callback, params) {
    let connection = mysql.createConnection(config);
    connection.connect();
    connection.query(
      "DELETE FROM enseignant WHERE mail = (?)",
      [params],
      (error, results) => {
        console.log("je t'efface");
        callback(results, error);
      }
    );
    connection.end();
  }
}

module.exports = new MysqlUtilities();
