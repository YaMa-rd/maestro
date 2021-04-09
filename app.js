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

app.post("/apprenant", (req, res) => {
  let user = new apprenant(
    req.body.nom,
    req.body.motdepasse,
    req.body.motdepasse,
    req.body.image,
    req.body.mail,
    req.body.age,
    req.body.genre
  );
  mysqlUtilities.postApprenant((result, error) => {
    if (!error) {
      console.log(result);
      res.send(result);
    } else {
      res.status(500).send(error);
    }
  });
});
// afficher admin par mail //
app.get("/admin/mail",(req,res)=>
{
  mysqlUtilities.getAdminByMail( (result, error) => 
  {
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

app.listen(port, () => {
<<<<<<< Updated upstream
  console.log(`Example app listening at http://localhost:${port}`);
});

// {
//   "nom" : "robert",
//   "motdepasse" : 123456,
//   "image" : "",
//   "mail" : "robert@maestro.com",
//   "age" : "48",
//   "genre" : "homme",

// }
=======
  console.log(`Example app listening at http://localhost:${port}`)
})
>>>>>>> Stashed changes
