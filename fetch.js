const btnConnection = document.querySelector(".btn");

let _data = {
  nom: "Professeur lea",
  motdepasse: 4141515,
  image: "./test.jpg",
  mail: "lea@maestro.com",
  age: "37",
  genre: "femme",
};

btnConnection.addEventListener("click", () => {
  fetch("http://localhost:3005/admin/enseignant", {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
  console.log("gvdhhdhdslkfhdslkhfdslkj");
});
