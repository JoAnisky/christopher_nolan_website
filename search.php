<?php
// // ***** SCRIPT AFFICHAGE DE LA BDD nolan_newsletter ET LISTE DES EMAILS INSCRITS *****

require('dbconnect.php');
$search = $_POST['search'];
echo json_encode($search);

// Créer la reqûete SQL
// $sqlSelectMails = 'SELECT id,email,date_inscription FROM subscribes LIMIT 10 OFFSET :nbr';
// Tester la requête vers la BDD
// try{
//     // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
//     $bdd = new PDO("mysql:dbname=$DB_NAME;host=$DB_HOST;charset=$DB_CHAR", $DB_USER, $DB_PASS, [
//         PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
//         ]
//     );

//     // Préparer la reqûete dans la base de données
//     $mailList = $bdd->prepare($sqlSelectMails);
//     $mailList->bindParam(':nbr', $showMore, PDO::PARAM_INT);
//     // Executer la requête
//     $mailList->execute();

//     // Boucle dans la bdd
//     $result = $mailList->fetchAll(PDO::FETCH_ASSOC);

//     // PDO::FETCH_ASSOC permet de créer un tableau associatif

//     // On encode la réponse en json
//     echo json_encode($result);

//     if ($mailList === false){
//         die("Erreur");
//     }

// // Attraper l'erreur si la connexion a la BDD Echoue
// }catch(PDOExeption $e){
//     echo $e->getMessage();
// }