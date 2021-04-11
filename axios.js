const btnConnection = document.querySelector(".btn");

btnConnection.addEventListener("click", () => {
  axios({
    method: "post",
    url: "http://localhost:3005/admin/enseignant",
    data: {
      nom: "Professeur lea",
      motdepasse: 4141515,
      image: "./test.jpg",
      mail: "lea@maestro.com",
      age: "37",
      genre: "femme",
    },
  });
  console.log("gvdhhdhdslkfhdslkhfdslkj");
});
