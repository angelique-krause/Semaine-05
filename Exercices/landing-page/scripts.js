// Consignes exercices globaux:

// naviguez jusqu'à votre dossier: exercices landing page, lisez les consignes relatives à l'intégration de votre maquette. Ensuite dans le fichier script.js réalisez les consignes suivantes:

// 1. Définissez une nouvelle variable "myHeaders", contenant un objet global Headers, configuré avec la paire de clé/valeur suivante: "Content-Type": "application/json"
let myHeaders = new Headers({ "Content-Type": "application/json" }); /* je crée un objet (je défini ma variable myHeaders) à l'intérieur du contructeur cad des parenthèses ; entre "" se sont les méthadonnées et elles sont encapsulées dans un objet {} */
// 2. Créez un formulaire dans votre index.html. Utilisez les balises "form", "label", "input", "button", passez comme ID "my-form" à votre balise form, ensuite pour les attributs "id" de vos input il est OBLIGATOIRE d'utiliser les clés attendues par l'API.
//C'est à dire une clé "auteur" et une clé "comment". Un de vos deux input aura donc comme valeur à l'attribut "id": "auteur", et le second "id":"comment". Pour finir, donnez comme ID "submit-btn" à votre bouton. Attention pour le bouton, il faut le sortir du formulaire sinon il rafraichit automatiquement la page.

//3. Vous disposez de vos headers, et de votre formulaire. Maintenant vous allez créer une ECOUTE d'évenement sur le bouton ayant pour id "submit-btn".
document.getElementById("submit-btn").addEventListener("click", () => { /* () peut être écrit function()*/
  /* pointe vers le bouton puis je lui met un écouteur  */
  let auteurValue = document.getElementById("auteur").value;/* 4a) je pointe vers auteur Returns a reference to the first object with the specified value of the ID or NAME attribute.*/
  let commentValue = document.getElementById("comment").value;/* je pointe vers comment */

  let body = {
    "auteur": auteurValue,
    "comment": commentValue /* c'est le CORPS */
  };
  // pour vérifier si je reçois les valeurs attendues, je fais un console.log pour le visualiser dans la console
  console.log(body);
  console.log(JSON.stringify(body)); /* la méthode stringify permet de garder le format chaine de caractères car ici JE DEMANDE DU JSON et nom un objet en javascript ce qui est le cas dans body ligne 19 */

  fetch("https://quotes-light-api.herokuapp.com/api/comments/", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body),
  }).then(res =>
    console.log("hello"));

})

//4.a A l'intérieur de cette écoute, vous allez créer une variable "formAuteurValue", une variable formCommentValue et aller pointer vers les inputs qui ont comme id auteur et comment ! dans l'ordre !,
//4.b ensuite récupérer la valeur de ces input et stockez là dans les variables que vous venez de créer

//5. Créez une variable "body" de type objet. Dans cette variable passé comme clé: auteur et comment, ensuite attribuez les valeurs de formAuteurValue et formCommentValue aux clés correspondantes

//6. Maintenant que nous possédons tout le nécessaire à la rédaction de la méthode fetch(), lançons nous!
// Créez une méthode fetch qui utilise cette url : https://quotes-light-api.herokuapp.com/api/comments/

//7. Passez en deuxième argument un objet contenant la méthode, les headers et le body

//8. Pour construire le body: utilisez la méthode JSON.stringify, passez lui la variable "myform" qui récupère les valeurs de votre formulaire

//9. Testez votre code, ouvrez votre index.html dans votre navigateur, ouvrez l'inspecteur d'élément, allez dans l'onglet "console". Maintenant, remplissez votre formulaire avec les valeurs demandées (l'auteur, et le commentaire). Clickez sur le bouton submit, une erreur est elle renvoyée? Si non allez dans l'onglet network et vérifier le statut de votre requête, si il est défini sur 200 c'est que votre requête a fonctionné!

//10. Maintenant, créez une méthode fetch qui va aller récupérer toutes les données de l'API, comme la semaine dernière. Elle va vous retourner un tableau d'objets. Pour chaque élément de ce tableau, créez dynamiquement une div pour afficher le commentaire dans votre index.html
