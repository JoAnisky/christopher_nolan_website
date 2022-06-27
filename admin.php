<?php 

// Charger le fichier autoload.php (pour gérer le fichier .env)
require __DIR__ .'/vendor/autoload.php';

// Spécifie d'aller chercher le fichier .env (_DIR_, nomfichier(si il possède un nom))
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);

// Charger la méthode dotenv
$dotenv->load();

$DB_USER= $_ENV['DB_USER'];
$DB_PASS= $_ENV['DB_PASS'];

if (isset($_POST['email'])){
    if (!empty($_POST["email"])) {
        if ($_POST["email"] == $DB_USER){

            
        }


    }

}else{
    echo "Vous devez vous connecter !"
}