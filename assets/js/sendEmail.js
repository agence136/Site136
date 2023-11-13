document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche la soumission normale du formulaire

    // Récupérez les valeurs des champs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone_number = document.getElementById("phone_number").value;
    var msg_subject = document.getElementById("msg_subject").value;
    var message = document.getElementById("message").value;

    // Créez un objet contenant les données à envoyer
    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone_number", phone_number);
    formData.append("msg_subject", msg_subject);
    formData.append("message", message);

    // Utilisez une requête AJAX pour envoyer les données au serveur
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/sendEmail.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Gérez la réponse du serveur ici
            console.log(xhr.responseText);     
        }
    };
    xhr.send(formData);
});
