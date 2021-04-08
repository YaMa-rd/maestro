class Enseignant {
  id;
  nom;
  motdepasse;
  role;
  image;
  mail;
  age;
  genre;

  constructor(nom, motdepasse, image, mail, age, genre) {
    this.id = null;
    this.nom = nom;
    this.motdepasse = motdepasse;
    this.role = role;
    this.image = image;
    this.mail = mail;
    this.age = age;
    this.genre = genre;
  }
}

module.exports = Enseignant;
