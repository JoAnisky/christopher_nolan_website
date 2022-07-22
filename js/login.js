const form = document.querySelector("form");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");
const labelErrorLogin = document.getElementById('error-login');
const incorrect = document.getElementById("incorrect");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (inputLogin.validity.valueMissing && inputPassword.validity.valueMissing){
        labelErrorLogin.textContent = "Les deux champs doivent être remplis";
        labelErrorLogin.style.color = "red";
        inputLogin.style.border = "1px solid red";
        inputPassword.style.border = "1px solid red";
    }else{
        ajaxResponse();
        labelErrorLogin.textContent = "";
        labelErrorLogin.style.color = '#15ff00';
    }
});

function ajaxResponse(){
    const formData = new FormData(form);
    // Lancement de la requête AJAX si tout est OK coté JS
    fetch('admin.php', {
        method: "POST",
        body : formData
    }).then(response => response.json())
    .then(response=> {
        incorrect.innerText = response.reponse;
        if(response[0] !== true){
            incorrect.innerText = response.reponse;
        }else{
            window.location.assign("dashboard.php");
        }
    });
};