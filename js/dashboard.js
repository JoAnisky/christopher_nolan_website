// Affichage liste des adresses mails de la BDD (mail-list.php)
fetch('mail-list.php')
  .then(response => {
      if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
      }
      return response.json();
  })
  .then(data => {
    // initialise le tableau
    const myArr = [];

    // Parcourt la longueur du fichier JSON
    for (i=0; i<data.length; i++){
        // On récupere la balise template contenue dans le HTML
        let template = document.querySelector('#productrow');
        // On récupere la balise tbody contenue dans le HTML
        let tBody = document.querySelector('tbody')

        // Crée un clone du contenu (TD) à partir du template
        let clone = document.importNode(template.content, true);
        let td = clone.querySelectorAll("td");
        // Injection adresse mail dans TD
        td[0].textContent = `${data[i].email}`;
        td[0].setAttribute('data-value', `${data[i].email}`);

        // Injection date inscription dans TD
        td[1].textContent = `${data[i].date_inscription}`;  
        td[1].setAttribute('data-value', `${data[i].date_inscription}`);

        td[2].setAttribute('data-value', `${data[i].id}`);
        tBody.appendChild(clone);

        // Bouton delete suppression au click
        const tdSup = document.querySelectorAll('.delete-rows');

        tdSup.forEach(elem => {     
            elem.addEventListener('click', (e)=> {
                const mailDeleteId = e.currentTarget.dataset.value;
                elem.parentElement.remove();
                const getMethod = {
                  method: 'GET' // 
                  // We send data in JSON format
                }
                fetch(`delete-user.php?mailToSuppID=${mailDeleteId}`, getMethod)
                .then(response => {
                  if (!response.ok) {
                    throw new Error(`Error status: ${response.status}`);
                  }
                  return response.json();
              })
            });
        });
        // Fin bouton Delete
    }
    const orderMail = document.getElementById('order-mail');
    orderMail.addEventListener('click', triAlpha);
    // Fin boucle affichage liste adresse mails
  });

// Tri à bulles de la liste d'adresse mails
function triAlpha(){
  // Récupère tous les TR contenus dans tbody
  let trRows = document.querySelectorAll(".rows");
  for (let i = 0; i < trRows.length; i ++){

    trRows = document.querySelectorAll(".rows");
    let email = trRows[i].querySelector(".td0").dataset.value;

    for (let k = i + 1; k<trRows.length; k++){
      let emailK = trRows[k].querySelector(".td0").dataset.value;

      if (email > emailK){
        console.log(email, emailK);
        console.log(trRows);
        trRows[i].before(trRows[k]);
      }

    }
  }
}