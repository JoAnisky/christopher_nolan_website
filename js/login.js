console.log('coucou');
const form = document.querySelector("form");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");
const labelErrorLogin = document.getElementById('error-login');
const labelErrorPassword = document.getElementById('error-password');
console.log(inputPassword);

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (inputLogin.validity.valueMissing){
        label.textContent = "Ce champ ne peut pas être vide !";
        label.style.color = "red";
        inputLogin.style.border = "1px solid red";
    }else if (inputPassword.validity.valueMissing){
        label.textContent = "Ce champ ne peut pas être vide !";
        label.style.color = "red";
        inputLogin.style.border = "1px solid red";
    }else{
        ajaxResponse();
        label.textContent = "";
        label.style.color = '#15ff00';
    }
});

// function ajaxResponse(){
//     const formData = new FormData(form);
//     // Lancement de la requête AJAX si tout est OK coté JS
//     fetch('admin.php', {
//         method: "POST",
//         body : formData
//     }).then(response => response.text())
//     .then(response=> {
//     });
// };