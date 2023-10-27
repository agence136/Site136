document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    var formData = new FormData(this);

    fetch("../php/sendEmail.php", {
        method: "POST",
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            alert("E-mail envoyé avec succès");
            // Réinitialisez le formulaire si nécessaire
            document.getElementById("contact-form").reset();
        } else {
            alert("Erreur lors de l'envoi de l'e-mail");
        }
    });
});