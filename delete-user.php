<?php
// ***** SCRIPT AFFICHAGE DE LA BDD nolan_newsletter ET LISTE DES EMAILS INSCRITS ***** //

// Charger le fichier autoload.php (pour récupérer les variables dans le fichier .env)
require __DIR__ .'/vendor/autoload.php';
// Spécifie d'aller chercher le fichier .env
// Si il possède un nom -> (_DIR_, nomfichier)
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
// Charger la méthode dotenv
$dotenv->load();
// Récupère les variables contenues dans le fichier .env
$DB_HOST= $_ENV['DB_HOST'];
$DB_USER= $_ENV['DB_USER'];
$DB_PASS= $_ENV['DB_PASS'];
$DB_NAME= $_ENV['DB_NAME'];

// *** Reqûete SQL de suppression *** 

$mailDeletedID = ($_GET['mailToSuppID']);
// Tester la requête vers la BDD
try{
    // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
    $bdd = new PDO('mysql:dbname='.$DB_NAME.';host='.$DB_HOST, $DB_USER, $DB_PASS);

    // Créer la reqûete SQL
    $sqlDeleteUser = "DELETE id, email, date_inscription FROM subscribes WHERE id=:id";

    // Préparer la reqûete dans la base de données
    $mailList = $bdd->prepare($sqlDeleteUser);

    $bdd->bindParam(':id', $mailDeletedID);
    // Executer la requête
    $mailList->execute();
    // PDO::FETCH_ASSOC permet de créer un tableau associatif
    // On encode la réponse en json
    if ($mailList === false){
        die("Erreur");
    }

// Attraper l'erreur si la connexion a la BDD Echoue
}catch(PDOExeption $e){
    echo $e->getMessage();
}

?>