<?php
// ***** SCRIPT AFFICHAGE DE LA BDD nolan_newsletter ET LISTE DES EMAILS INSCRITS ***** //
// Toujours démarrer la session en premier
session_start();
// Tester si la variable $_SESSION['id'] generée dans admin.php n'existe pas
if (!isset($_SESSION['id'])){
//Si elle n'existe pas, redirection page login.php
    header('Location: index.html');
        exit();
}
// Charger les informations de connexion a la DB
require('dbconnect.php');

// *** Reqûete SQL de suppression *** 

// Tester la requête vers la BDD
try{
    // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
    $bdd = new PDO("mysql:dbname=$DB_NAME;host=$DB_HOST;charset=$DB_CHAR", $DB_USER, $DB_PASS);
    // Créer la reqûete SQL
    // Définit les paramètres d'exceptions
    $bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    // Préparer la reqûete dans la base de données
    $deleteMail = $bdd->prepare("DELETE FROM subscribes WHERE id=:id");

    $deleteMail->bindParam(':id', $_GET['mailToSuppID'], PDO::PARAM_INT);

    // Executer la requête
    $deleteMail->execute(['id' => $_GET['mailToSuppID']]);
    
    if($deleteMail->rowCount() == 1){
        // Initialise le tableau qui contient la réponse à afficher en JS et le booleen connexion OK ou non
        $response = true;

        // Encode la réponse au format JSON pour être reçu par JS
        echo json_encode($response);
    }else{
        $response = false;
        echo json_encode($response);
    }

// Attraper l'erreur si la connexion a la BDD Echoue
}catch(Exception $e){
    $response = false;
    echo json_encode($response);
}
?>