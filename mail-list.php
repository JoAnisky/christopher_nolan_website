<?php
// // ***** SCRIPT AFFICHAGE DE LA BDD nolan_newsletter ET LISTE DES EMAILS INSCRITS *****
require('dbconnect.php');

if (isset($_POST['value'])){
    $showMore = $_POST['value'];
}
// Créer les reqûetes SQL
$sqlSelectMails = 'SELECT id,email,date_inscription FROM subscribes LIMIT 10 OFFSET :nbr';
$mailCountReq = 'SELECT COUNT(id) AS "Total" FROM subscribes';

// Tester la requête vers la BDD
try{
    // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
    $bdd = new PDO("mysql:dbname=$DB_NAME;host=$DB_HOST;charset=$DB_CHAR", $DB_USER, $DB_PASS);
    // Préparer les reqûetes dans la base de données
    $mailList = $bdd->prepare($sqlSelectMails);
    $totalMail = $bdd->prepare($mailCountReq);

    $mailList->bindParam(':nbr', $showMore, PDO::PARAM_INT);
    // Executer les requêtes
    $mailList->execute();
    $totalMail->execute();

    // rowCount va compter le nombre de résultats de la requête
    $count = $mailList->rowCount();

    // Récupère la valeur qui est dans la colonne de résultat de la requête
    $countTotal = $totalMail->fetchColumn();

    // Boucle dans la bdd
    $result = $mailList->fetchAll(PDO::FETCH_ASSOC);
    // PDO::FETCH_ASSOC permet de créer un tableau associatif

    // On encode la réponse en json
    print json_encode($result);

    header('nbr:'.($count + $showMore));
    header('nbrTotal:'.$countTotal);

    if ($mailList === false){
        die("Erreur");
    }

// Attraper l'erreur si la connexion a la BDD Echoue
}catch(Exeption $e){
    echo $e->getMessage();
}