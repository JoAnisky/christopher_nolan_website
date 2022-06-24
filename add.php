<?php
// Si le formulaire a bien été soumis
if (isset($_POST["email"])) {
    $email = $_POST["email"]
    // Si le champ mail n'est pas vide
    if (!empty($email)) {
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){

            echo "L'adresse e-mail est valide";
            $pdo = new PDO('mysql:dbname=nolan_newsletter;host=127.0.0.1', 'root', 'root', [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]);

        }else{

            echo "L'adresse e-mail n'est pas valide";
        }
    }
}
echo "Formulaire non envoyé !"

?>