<?php
// // ***** SCRIPT AFFICHAGE DE LA BDD nolan_newsletter ET LISTE DES EMAILS INSCRITS *****
require_once('dbconnect.php');

if (isset($_POST['search']) && !empty($_POST['search'])){
    $search = htmlspecialchars($_POST['search']);
    // Tester la requête vers la BDD
    try{
        // Initialise un objet PDO avec les données de connexions transmises depuis le fichier .env
        $bdd = new PDO("mysql:dbname=$DB_NAME;host=$DB_HOST;charset=$DB_CHAR", $DB_USER, $DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]
        );
        // Créer la reqûete SQL
        $sqlSelectMails = 'SELECT id,email,date_inscription FROM subscribes WHERE email LIKE :search';

        // Préparer la reqûete dans la base de données
        $sql = $bdd->prepare($sqlSelectMails);

        $sql->bindValue(':search','%'.$search.'%', PDO::PARAM_STR);
        // Executer la requête
        $sql->execute();
        // Boucle dans la bdd
        $search = $sql->fetchAll(PDO::FETCH_ASSOC);
        // On encode la réponse en json
        print json_encode($search);

    // Attraper l'erreur si la connexion a la BDD Echoue
    }catch(Exception $e){
        echo $e->getMessage();
    }

}else if($_POST['search'] = " ") {
    $errorMsg = json_encode("Le champ ne peut pas etre vide !");
    header('error:'.$errorMsg);
}else{

}