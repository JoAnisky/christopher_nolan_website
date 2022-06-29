<?php
// Doit récupérer le booleen
// JSON décode
function is_connected (): bool{
    if(session_status() === 1){
        session_start();
    }
    return !empty($_SESSION['pseudo']);
}

function force_user_connect (): void{
    if(!is_connected()){
        exit();
    }
}