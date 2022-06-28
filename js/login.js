const form = document.querySelector("form");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");
const labelErrorLogin = document.getElementById('error-login');

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
    }).then(response => response.text())
    .then(response=> {
    });
};