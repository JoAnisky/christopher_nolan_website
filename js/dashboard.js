// Fetch affichage adresse mail du script mail-list.php
function mailList(){
  fetch('mail-list.php')
    .then(response => {
        if (!response.ok) {
          throw new Error(`Error status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
      // Parcourt la longueur du fichier JSON
      for (i=0; i<data.length; i++){
          // On récupere la balise template contenue dans le HTML
          const template = document.querySelector('#productrow');
          // On récupere la balise tbody contenue dans le HTML
          const tBody = document.querySelector('tbody');

          // Crée un clone du contenu (TD) à partir du template
          let clone = document.importNode(template.content, true);
          let td = clone.querySelectorAll("td");
          // Injection adresse mail dans TD
          td[0].textContent = `${data[i].email}`;

          // Injection adresse mail dans TD
          td[1].textContent = `${data[i].date_inscription}`;  

          tBody.appendChild(clone);
        
      }

   })
    .catch(err => {console.log(err)});
};
mailList();

// Bouton delete
const tdDel = document.querySelectorAll('.delete-rows');
const arrayDel = Array.from(tdDel);

tdDel.forEach(elem => {

    elem.addEventListener('click', (e)=> {
        let delClicked = (e.currentTarget);
        const index = arrayDel.indexOf(delClicked);

        const mailDeleted = data[index].email;     

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "delete-user.php", true);
        xhr.send(`selectedMail=${mailDeleted}`);

        console.log(mailDeleted)
        elem.parentElement.remove()
    });

});