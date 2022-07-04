// Fetch affichage adresse mail du script mail-list.php
async function mailList(){
    await fetch('mail-list.php')
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

          deleteMail(); 
          tBody.appendChild(clone);
      }
   })
    .catch(err => {console.log(err)});
};
mailList();


// Bouton delete 
function deleteMail(){
  const tdDel = document.querySelectorAll('.delete-rows');
  const arrayDel = Array.from(tdDel);

  arrayDel.forEach(elem => {
      elem.addEventListener('click', ()=> {
        let delClicked =  arrayDel.indexOf(elem);
        console.log(delClicked, 'coucou');
      });
  })
};
