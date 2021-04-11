const btnConnection = document.querySelector(".btn");

btnConnection.addEventListener("click", () => {
  axios.post("http://localhost:3005/admin/enseignant", {
    nom: "Professeur leon",
    motdepasse: 4441515,
    image: "",
    mail: "leon@maestro.com",
    age: "34",
    genre: "homme",
  });
  console.log("gvdhhdhdslkfhdslkhfdslkj");
});

// axios({
//   method: "post",
//   url: "http://localhost:3005/admin/enseignant",
//   data: {
//     nom: "Professeur leon",
//     motdepasse: 4441515,
//     image: "",
//     mail: "leon@maestro.com",
//     age: "34",
//     genre: "homme",
//   },
// });
