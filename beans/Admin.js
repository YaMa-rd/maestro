class Admin {
  id;
  nom;
  motdepasse;
  mail;

  constructor(nom, motdepasse, mail) {
    this.id = null;
    this.nom = nom;
    this.motdepasse = motdepasse;
    this.mail = mail;
  }
}

module.exports = Admin;
