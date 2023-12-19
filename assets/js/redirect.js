let linkCom = document.querySelector(".redirect-com");


linkCom.addEventListener("click", function () {
    console.log("clique");
    // Redirigez vers la page-de-redirection.html lorsque le bouton est cliqué
    window.location.href = "./assets/html/comciergerie.html";
});

let linkApp = document.querySelector(".redirect-approche");
linkApp.addEventListener("click", function () {
    // Redirigez vers la page-de-redirection.html lorsque le bouton est cliqué
    window.location.href = "./assets/html/approche.html";
});

let linkVal = document.querySelector(".redirect-valeur");
linkVal.addEventListener("click", function () {
    // Redirigez vers la page-de-redirection.html lorsque le bouton est cliqué
    window.location.href = "./assets/html/valeur.html";
});

let linkOffer = document.querySelectorAll(".offer-link");

for (let i in linkOffer) (
    linkOffer[i].addEventListener("click", function () {
        window.location.href = "./assets/html/offre.html"
    })
);


