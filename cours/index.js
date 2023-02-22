const obj = {
  //index : value
  pseudo: "From Scratch",
  ville: "Bordeaux",
  admin: false,
};

//Ajouter
obj.age = 24;
obj["admin"] = true;

//Modifier
obj.pseudo = "FS";

//Supprimer
delete obj.ville;
// console.log(obj);

//checker si propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//Parcourir l'objet
for (const key in obj) {
  console.log(key + " : " + obj[key]);
}
