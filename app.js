const express = require("express");
const bodyParser = require("body-parser");
const mysqlUtilities = require("./utilities/MysqlUtilities");
// const admin = require("./beans/Admin");
const apprenant = require("./beans/Apprenant");
const enseignant = require("./beans/Enseignant");
const app = express();
const port = 3005;

let cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

//*partie admin
app.get("/admin", (req, res) => {
  mysqlUtilities.getAdmin((result, error) => {
    if (!error) {
      console.log(result);
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  });
});

// afficher admin par mail //
app.get("/admin/:mail", (req, res) => {
  let mail = req.params.mail;
  mysqlUtilities.getAdminByMail((result, error) => {
    if (!error) {
      console.log(result);
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  }, mail);
});

//----------afficher apprenant-------------//
app.get("/apprenant", (req, res) => {
  mysqlUtilities.getApprenant((result, error) => {
    if (!error) {
      console.log(result);
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  });
});

app.get("/apprenant/:mail", (req, res) => {
  let mail = req.params.mail;
  mysqlUtilities.getApprenantByMail((result, error) => {
    if (!error) {
      console.log(result);
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  }, mail);
});

app.get("/enseignant", (req, res) => {
  mysqlUtilities.getEnseignant((result, error) => {
    if (!error) {
      console.log(result);
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  });
});

app.get("/enseignant/:mail", (req, res) => {
  let mail = req.params.mail;
  mysqlUtilities.getEnseignantByMail((result, error) => {
    if (!error) {
      console.log(result);
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  }, mail);
});

//*ajoute un apprenant

app.post("/apprenant", (req, res) => {
  let user = new apprenant(
    req.body.nom,
    req.body.motdepasse,
    req.body.image,
    req.body.mail,
    req.body.age,
    req.body.genre
  );
  mysqlUtilities.postApprenant((result, error) => {
    if (!error) {
      console.log(result);
      res.send(user);
    } else {
      res.status(500).send(error);
    }
  }, user);
});

//*ajoute un apprenant depuis admin

app.post("/admin/apprenant", (req, res) => {
  let user = new apprenant(
    req.body.nom,
    req.body.motdepasse,
    req.body.image,
    req.body.mail,
    req.body.age,
    req.body.genre
  );
  mysqlUtilities.postApprenant((result, error) => {
    if (!error) {
      console.log(result);
      res.send(user);
    } else {
      res.status(500).send(error);
    }
  }, user);
});

//* ajoute un enseignant

app.post("/enseignant", (req, res) => {
  let user = new enseignant(
    req.body.nom,
    req.body.motdepasse,
    req.body.image,
    req.body.mail,
    req.body.age,
    req.body.genre
  );
  mysqlUtilities.postEnseignant((result, error) => {
    if (!error) {
      console.log(result);
      res.send(user);
    } else {
      res.status(500).send(error);
    }
  }, user);
});

//*ajoute un enseignant depuis admin

app.post("/admin/enseignant", (req, res) => {
  let user = new enseignant(
    req.body.nom,
    req.body.motdepasse,
    req.body.image,
    req.body.mail,
    req.body.age,
    req.body.genre
  );
  mysqlUtilities.postEnseignant((result, error) => {
    if (!error) {
      console.log(result);
      res.send(user);
    } else {
      res.status(500).send(error);
    }
  }, user);
});

app.delete("/admin/apprenant/:mail", (req, res) => {
  let mailDelete = req.params.mail;
  console.log(mailDelete);
  mysqlUtilities.deleteApprenant((result, error) => {
    if (!error) {
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  }, mailDelete);
});

app.delete("/admin/enseignant/:mail", (req, res) => {
  let mailDelete = req.params.mail;
  console.log(mailDelete);
  mysqlUtilities.deleteEnseignant((result, error) => {
    if (!error) {
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  }, mailDelete);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
