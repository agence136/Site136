let link1 = document.querySelector(".redirect-com");
console.log(link1);

link1.addEventListener("click", function() {
    console.log("clique")
    // Redirigez vers la page-de-redirection.html lorsque le bouton est cliqué
    window.location.href = "./assets/html/comciergerie.html";
});

let link2 = document.querySelector(".redirect-approche");
link2.addEventListener("click", function() {
    // Redirigez vers la page-de-redirection.html lorsque le bouton est cliqué
    window.location.href = "./assets/html/approche.html";
});

let link3 = document.querySelector(".redirect-valeur");
link3.addEventListener("click", function() {
    // Redirigez vers la page-de-redirection.html lorsque le bouton est cliqué
    window.location.href = "./assets/html/valeur.html";
});
