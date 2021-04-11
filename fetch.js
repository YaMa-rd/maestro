const btnConnection2 = document.querySelector(".btnfetch");

btnConnection2.addEventListener("click", () => {
  let _data = {
    nom: "Professeur reddington",
    motdepasse: 1545,
    image: "",
    mail: "reddington@maestro.com",
    age: "52",
    genre: "homme",
  };
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
