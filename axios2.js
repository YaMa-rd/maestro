const btnConnection3 = document.querySelector(".btnaxios2");

//*fonctionne parfaitement avec database maestro
// btnConnection3.addEventListener("click", () => {
//   axios
//     .post("http://localhost:3005/admin/enseignant", {
//       nom: "Professeur trevor",
//       motdepasse: 124654,
//       image: "",
//       mail: "trevor@maestro.com",
//       age: "23",
//       genre: "homme",
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

// //* fonctionnel avec database maestro mais pas de message d'erreur ni de console log
// btnConnection3.addEventListener("click", () => {
//   axios({
//     method: "post",
//     url: "http://localhost:3005/admin/enseignant",
//     data: {
//       nom: "Professeur leon",
//       motdepasse: 4441515,
//       image: "",
//       mail: "leon@maestro.com",
//       age: "34",
//       genre: "homme",
//     },
//   });
// });
