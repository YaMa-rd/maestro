class Admin {
  id;
  nom;
  motdepasse;

  constructor(nom, motdepasse) {
    this.id = null;
    this.nom = nom;
    this.motdepasse = motdepasse;
  }
}

module.exports = Admin;
