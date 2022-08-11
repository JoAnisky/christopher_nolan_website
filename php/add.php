<?php
require_once('dbconnect.php');

// Si le formulaire a bien été soumis
if (isset($_POST["email"])) {
    // Si le champ mail n'est pas vide
    if (!empty($_POST["email"])) {
        if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){
            $email = $_POST['email'];
            try{
                // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
                $dbco = new PDO('mysql:dbname='.$DB_NAME.';host='.$DB_HOST, $DB_USER, $DB_PASS);
            }catch (Exeption $e){
                echo "coucou".$e;
            }
            // Définit les paramètres d'exceptions
            // $dbco->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

            // Prépare la requête SQL
            $insertDB = $dbco->prepare(
            "INSERT INTO subscribes (email) 
            VALUES (:email)");
            // Ajout une sécurité (on précise le type de données attendu)
            $insertDB->bindParam(':email', $email, PDO::PARAM_STR);
        
            // $insertDB->execute();

            if(!$insertDB->execute()){
                $errorResponse = $insertDB->errorCode();
                header('errorResponse:'.($errorResponse));
            }
        }else{
            $errorResponse = 1;
            header('errorResponse:'.($errorResponse));
        }
    }
}else{
    header('Location: index.html');
}