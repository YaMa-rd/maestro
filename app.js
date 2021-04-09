const express = require("express");
const bodyParser = require("body-parser");
const mysqlUtilities = require("./utilities/MysqlUtilities");
const admin = require("./beans/Admin");
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

app.post("/apprenant", (req, res) => {
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
// afficher admin par mail //
app.get("/admin/:mail",(req,res)=>
{
  let mail =req.params.mail;
  mysqlUtilities.getAdminByMail( (result, error) => {
    if (!error) 
    {
      console.log(result);
      res.send(result);
    } 
    else 
    {
      res.status(500).send(error);
    }
  },mail)
});
//----------afficher apprenant-------------//
app.get("/apprenant",(req,res)=>
{
  mysqlUtilities.getApprenant((result, error) => {
    if (!error) 
    {
      console.log(result);
      res.send(result);
    } else 
    {
      res.status(500).send(error);
    }
  });
});
app.get("/apprenant/:mail",(req,res)=>
{
  let mail =req.params.mail;
  mysqlUtilities.getApprenantByMail( (result, error) => {
    if (!error) 
    {
      console.log(result);
      res.send(result);
    } 
    else 
    {
      res.status(500).send(error);
    }
  },mail)
});
app.get("/enseignant",(req,res)=>
{
  mysqlUtilities.getEnseignant((result, error) => {
    if (!error) 
    {
      console.log(result);
      res.send(result);
    } else 
    {
      res.status(500).send(error);
    }
  });
});
app.get("/enseignant/:mail",(req,res)=>
{
  let mail =req.params.mail;
  mysqlUtilities.getEnseignantByMail( (result, error) => {
    if (!error) 
    {
      console.log(result);
      res.send(result);
    } 
    else 
    {
      res.status(500).send(error);
    }
  },mail)
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
<<<<<<< HEAD

// {
//   "nom" : "robert",
//   "motdepasse" : 123456,
//   "image" : "",
//   "mail" : "robert@maestro.com",
//   "age" : "48",
//   "genre" : "homme",

// }
//----------afficher apprenant/mail-------------//
=======
>>>>>>> 4af25d623a065f80f19578cac4cd86329bd2a56e
