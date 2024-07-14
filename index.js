//Personnaliser le 'Bonjour'
/*window.addEventListener ('load', function() {
    let prenom = window.prompt("Quel est votre prénom?");

    if(prenom) {
    let prenomAfficher = document.getElementById('BonjourPrenom');
    prenomAfficher.textContent = 'Bonjour ' + prenom + ' !';
    }

    else {
        alert ('Vous n\'avez pas saisi de prénom.')
    }
});*/

//Afficher la date du jour
const date = new Date();

let jour= date.getDate();
let mois = date.getMonth() + 1;
let année = date.getFullYear();

let dateActuelle = `${jour}` + '/' + `${mois}` + '/' + `${année}`;
console.log(dateActuelle);

let afficherDateActuelle = document.getElementById('dateActuelle');
afficherDateActuelle.textContent = 'Date : ' + dateActuelle;

//Supprimer une tache
let iconesSupprimer = document.querySelectorAll('.fa-solid');

iconesSupprimer.forEach(function(icone) {
    icone.addEventListener('click', function() {
        let tacheASupprimer = this.closest('.form-control');

        if (tacheASupprimer) {
        tacheASupprimer.remove();
        }
    });
});

//Créer une nouvelle tache

let boutonAjouter = document.getElementById('boutonAjouter');

boutonAjouter.addEventListener('click', function() {
    let ajouterUneTache = document.querySelector('#ajouterUneTache').value;

    if (ajouterUneTache === '') {
        alert ("Saisissez une tache s'il vous plait");
    }

    else {
        let container = document.querySelector('.liste-taches');
        let nouvelleTache = document.createDocumentFragment();
        
        const label = document.createElement('label');
        label.className = 'form-control';

        const tacheSaisie = document.createTextNode(ajouterUneTache);
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'checkbox';
        
        const i = document.createElement('i');
        i.className='fa-solid fa-trash';

        i.addEventListener('click', function() {
            let tacheASupprimer = this.closest('.form-control');
            if (tacheASupprimer) {
                tacheASupprimer.remove();
            }
        });
        
        label.appendChild(input);
        label.appendChild(tacheSaisie);
        label.appendChild(i);
        
        nouvelleTache.appendChild(label);
        container.appendChild(nouvelleTache);

        document.querySelector('#ajouterUneTache').value = '';
    }
});
