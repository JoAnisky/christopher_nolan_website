<?php
require 'functions/auth.php';
force_user_connect();
?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>Christopher Nolan - Dashboard</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Website Fanpage de Christopher Nolan crée dans le cadre de la formation ACCES CODE SCHOOL Developpeur web/web mobile">
        <meta name="keywords" content="conception web, creation web, creation site internet, erol conception">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/adm.css" />
    </head>
<body>
    <main>
        <div class="dash_up_container">
            <div class="dash_up_left">
                <p class="log">Dashboard</p>
                <p class="blue-text">Inscriptions à la newsletter</p>
            </div>
            <div class="dash_up_right">
                <p>Se déconnecter</p>
                <svg id="logo-disconnect" >
                    <path fill="#E1090F" fill-rule="evenodd" d="M6.09 4v2.945c-2.353 1.208-3.69 3.747-3.22 6.361.524 2.923 3.13 5.021 6.188 4.995 3.059-.027 5.626-2.187 6.096-5.118.415-2.59-.922-5.087-3.244-6.271v-2.9c3.074 1.022 5.282 3.54 5.911 6.494a8.43 8.43 0 0 1 .07 3.091c-.676 4.214-4.414 7.364-8.81 7.403-4.395.038-8.194-3.045-8.947-7.246-.753-4.2 1.76-8.339 5.911-9.743.016-.005.03-.006.046-.011Z" clip-rule="evenodd"/>
                    <path fill="#E1090F" d="M9 2v8Z"/>
                    <path stroke="#E1090F" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 2v8"/>
                </svg>
            </div>
        </div>
        <div class="table_contain">
            <table>
                <thead>
                    <tr class="table-head">
                        <td>Inscriptions</td>
                        <td colspan="2">
                            <button type ="submit" id="btn-export-csv">Export .CSV </button>
                        </td>
                    </tr> 
                    <tr>
                        <th style="width:45%">Email inscrits 
                            <svg class="arrow-array" width="12" height="9" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 5.196-9H.804L6 9z" fill="#E9E9E9"/>
                            </svg>
                        </th>
                        <th style="width:45%">Date d'inscription 
                            <svg class="arrow-array" width="12" height="9" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 5.196-9H.804L6 9z" fill="#E9E9E9"/>
                            </svg>
                        </th>
                        <th style="width:8%">Désinscrire</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>email@email.com</td>
                        <td>17/06/2022</td>
                        <td><svg class="btn-del-user" width="10" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H1zm3 9H3V7h1v7zm2 0H5V7h1v7zm2 0H7V7h1v7zm2 0H9V7h1v7zm2.25-12H9V.75A.753.753 0 0 0 8.25 0h-3.5A.753.753 0 0 0 4 .75V2H.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM8 2H5v-.987h3V2z" fill="#fff"/></svg></td>
                    </tr>
                    <tr>
                        <td>email@email.com</td>
                        <td>17/06/2022</td>
                        <td>
                            <svg class="btn-del-user" width="13" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H1zm3 9H3V7h1v7zm2 0H5V7h1v7zm2 0H7V7h1v7zm2 0H9V7h1v7zm2.25-12H9V.75A.753.753 0 0 0 8.25 0h-3.5A.753.753 0 0 0 4 .75V2H.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM8 2H5v-.987h3V2z" fill="#fff"/>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <td>email@email.com</td>
                        <td>17/06/2022</td>
                        <td>
                            <svg class="btn-del-user" width="13" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H1zm3 9H3V7h1v7zm2 0H5V7h1v7zm2 0H7V7h1v7zm2 0H9V7h1v7zm2.25-12H9V.75A.753.753 0 0 0 8.25 0h-3.5A.753.753 0 0 0 4 .75V2H.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM8 2H5v-.987h3V2z" fill="#fff"/>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <td>email@email.com</td>
                        <td>17/06/2022</td>
                        <td>
                            <svg class="btn-del-user" width="13" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H1zm3 9H3V7h1v7zm2 0H5V7h1v7zm2 0H7V7h1v7zm2 0H9V7h1v7zm2.25-12H9V.75A.753.753 0 0 0 8.25 0h-3.5A.753.753 0 0 0 4 .75V2H.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM8 2H5v-.987h3V2z" fill="#fff"/>
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>    
</body>
</html>