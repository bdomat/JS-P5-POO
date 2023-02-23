const obj = {
  //index : value
  pseudo: "From Scratch",
  ville: "Bordeaux",
  admin: false,
  direBonjour: function () {
    console.log("Bonjour je suis" + this.pseudo);
  },
  // direBonjour() {
  //   console.log("Bonjour je suis" + this.pseudo);
  // },
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
// console.log(obj.direBonjour());

//Obtenir les clés d'un objet
const keys = Object.keys(obj);
// console.log(keys);

const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
  pseudo: "From",
};

//Fusionner objects
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//Empecher les modifications
//const newObj = Object.freeze(obj);
//--> Permet de geler tout le contenu de l'objet
const newObj = Object.seal(obj);
newObj.pseudo = "Test";
//--> Modification d'un valeur existante autorisée avec seal
newObj.adresse = "42 avenue du code";
//--> Impossible à ajouter avec un seal car clé non existante

// console.log(newObj);

//-----------------------------
// Construire des objets
//-----------------------------

//Fonction constructeur

function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;
  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User(`From Scratch`, `Bordeaux`);
const user2 = new User(`Bertrand`, `Bourg en Bresse`);
// console.log(user2);
// console.log(user2.getCity());

//---------------------------
//Factory functions
//---------------------------
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("Bertrand", "Nevers");
// console.log(user4);

//---------------------------
// Class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Samia", "Lyon");

Utilisateur.prototype.sayCity = function () {
  console.log("j'habite à " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  method1() {
    //ma méthode
  },
  method2() {
    //ma méthode
  },
});

console.log(user5);

//----------------------
//L'héritage
//----------------------
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("Le chien court !");
  }
}

const rintintin = new Dog("Rintyintin", "9");
console.log(rintintin);

class Cat extends Animal {
  hunt() {
    console.log("J'ai tué un oiseau !");
  }
}
