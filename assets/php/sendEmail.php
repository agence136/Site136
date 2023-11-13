<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérez les données du formulaire
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone_number = $_POST["phone_number"];
    $msg_subject = $_POST["msg_subject"];
    $message = $_POST["message"];

    // Adresse e-mail de destination
    $to = "contact@agence136.fr";

    // Sujet de l'e-mail
    $subject = "Nouveau message de contact depuis votre site web";

    // Contenu de l'e-mail
    $email_content = "Nom: $name\n";
    $email_content .= "Adresse e-mail: $email\n";
    $email_content .= "Numéro de téléphone: $phone_number\n";
    $email_content .= "Objet: $msg_subject\n\n";
    $email_content .= "Message:\n$message";

    // Entêtes de l'e-mail
    $headers = "From: elisabeth.malek@agence136.fr";

    // Envoyer l'e-mail
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message. Veuillez réessayer plus tard.";
    }
} else {
    // Redirection en cas d'accès direct au script sans soumission du formulaire
    header("Location: /");
}
?>
