<?php
function is_connected (): bool{
    if(session_status() === PHP_SESSION_NONE){
        session_start();
    }
    return !empty($_SESSION['connecte']);
}

function force_user_connect (): void{
    if(!is_connected()){
        // si pas connecté, renvoyer à la page login
        header('Location: login.php');
        exit();
    }
}