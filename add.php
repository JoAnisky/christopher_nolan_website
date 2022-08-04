<?php
// Charger le fichier autoload.php (pour gérer le fichier .env)
require __DIR__ .'/vendor/autoload.php';

// Spécifie d'aller chercher le fichier .env (_DIR_, nomfichier(si il possède un nom))
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);

// Charger la méthode dotenv
$dotenv->load();

// Récupère les variables contenues dans le fichier .env
$DB_HOST= $_ENV['DB_HOST'];
$DB_USER= $_ENV['DB_USER'];
$DB_PASS= $_ENV['DB_PASS'];
$DB_NAME= $_ENV['DB_NAME'];

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