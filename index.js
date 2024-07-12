//Personnaliser le 'Bonjour'
window.addEventListener ('load', function() {
    let prenom = window.prompt("Quel est votre prénom?");

    if(prenom) {
    let prenomAfficher = document.getElementById('BonjourPrenom');
    prenomAfficher.textContent = 'Bonjour ' + prenom + ' !';
    }

    else {
        alert ('Vous n\'avez pas saisi de prénom.')
    }
});

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

//Ajouter une tache
/*let boutonAjouter = document.querySelector('#boutonAjouter');
let ajouterUneTache = document.querySelector('#ajouterUneTache').value;

boutonAjouter.addEventListener('click', function() {
    if (ajouterUneTache === ''){
        alert('Saisissez une tache');
    }

    else {

    }
}*/