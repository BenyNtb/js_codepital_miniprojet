// # Bienvenu à Codepital:
// >Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.
// ​
// ## Description des patients
// >les malades ont un nom, une maladie, de l'argent, une poche, un état de santé,ils savent aller à un endroit, prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 
// ​
// |nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|

class Patient {
    constructor(nom,maladie,argent,poche,etatSante,traitement,goTo,takeCare,paye){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
        this.goTo = goTo;
        this.paye = paye;
        this.goTo = () => {
            console.log(`${this.nom} est allé à la pharmacie`);
        };
        
        this.takeCare = () => {
            if (this.argent >= 100) {
                console.log(`${this.nom} est soigné`);
            } else {
                cimetiere.push(this.nom);
                console.log(`${this.nom} n'as pas assez d'argent pour le traitement.`);
            }
        };
        this.paye = () => {
            this.argent -= doctor.tarif;
        }
    }
}

// |---|---|---|---|---|---|---|---|---|
// |Marcus|mal indenté|100|vide|malade
// |Optimus|unsave|200|vide|malade
// |Sangoku|404|80|vide|malade
// |DarthVader|azmatique|110|vide|malade
// |Semicolon|syntaxError|60|vide|malade
let patient1 = new Patient('Marcus', 'mal indenté', 100, 'vide', 'malade');
let patient2 = new Patient ('Optimus', 'unsave', 200, 'vide', 'malade')
let patient3 = new Patient  ('Sangoku', '404', 80, 'vide', 'malade')
let patient4 = new Patient ('DarthVader', 'azmatique', 110, 'vide', 'malade')
let patient5 = new Patient ('Semicolon', 'syntaxError', 60, 'vide', 'malade')
// ​
// ## Description du doctor
// >Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payer avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.
// |nom|argent|cabinet|diagnostique|patienTIn|patientOut
let doctor = {
    nom : "doctor",
    tarif : 50,
    cabinet : [],
    diagnostique(patients){
        // console.log(`${patient.nom} est ${maladie}`);
        console.log(`${patients.maladie}`);
    },
    patientIn(patients){
        this.cabinet.push(patients.nom)
        
    },
    patientOut(patients){
        this.cabinet.splice(patients.nom)
        // console.log(`${patient.nom} a quitté le cabinet`);
    }
}

class Pharmacie {
    constructor(traitement,prix){
        this.traitement = traitement;
        this.prix = prix;
    }
}

let traitement1 = new Pharmacie('ctrl+maj+f', 60)
let traitement2 = new Pharmacie('saveOnFocusChange', 100) 
let traitement3 = new Pharmacie('CheckLinkRelation', 35)
let traitement4 = new Pharmacie('Ventoline', 40)
let traitement5 = new Pharmacie('f12+doc', 20)

let cimetiere = [];



let salleAttente = {
    nom : "salle d'attente",
    patient : [patient1,patient2,patient3,patient4,patient5],
}
// console.log(salleAttente);
console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);


// let chat = {
//     contenue : [0],
//     miauler() {
//         setTimeout(()=> {
//             if (this.contenue[0] == 0) {
//                 console.log('miaou');
//             }
//         }, 2000)
//     }
// }
// |---|---|---|---|---|---|
// |Debugger|0|[chat]
// ​
// ### Grille des diagnostiques
// |maladie|traitement|
// |---|---|
// |mal indenté|`ctrl+maj+f`|
// |unsave|`saveOnFocusChange`|
// |404|`CheckLinkRelation`|
// |azmatique|`Ventoline`|
// |syntaxError|`f12+doc`|
// ​
// ## La pharmacie
// >Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.




// ### Tarif des traitements
// |Traitement|prix|
// |---|---|
// |`ctrl+maj+f`|60€
// |`saveOnFocusChange`|100€
// |`CheckLinkRelation`|35€
// |`Ventoline`|40€
// |`f12+doc`|20€

// # Vérification
// >Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.

// LE CABINET EST OUVERT 

doctor.patientIn(patient1)
console.log(`${patient1.nom} est entré au cabinet`);
// patient.nom.patientIn(Doctor.cabinet)
// console.log(doctor.cabinet.length);
let chat = {
        contenue : [0],
        miauler() {
            setTimeout(()=> {
                if (this.contenue[0] == 0) {
                    console.log('miaou');
                }
            }, 2000)
        }
    }
    chat.miauler()

    // MARCUS

    doctor.diagnostique(patient1)
    console.log(`${patient1.nom} est ${patient1.maladie}`);
    console.log(`le traitement de ${patient1.nom} est ${traitement2.traitement}`);
    patient1.paye(doctor)
    console.log(`${patient1.nom} a ${patient1.argent}€ actuellement`);
    
    doctor.patientOut(patient1)
    console.log(`${patient1.nom} a quitté le cabinet`);
    // console.log(doctor.cabinet.length);
    patient1.goTo()
    console.log(`le traitement de ${patient1.nom} coûte ${traitement1.prix} euros`);
    patient1.takeCare()
    console.log(`${patient1.nom} est mort`);
    // salleAttente.patientOut2(patient1);
    // console.log(doctor.cabinet.length);

console.log("____________________________________________________________________");

    // OPTIMUS 

    salleAttente.patient.splice(salleAttente.patient.indexOf(patient1), 1); console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);


    console.log("____________________________________________________________________");


    // doctor.diagnostique(patient2)
    console.log(`${patient2.nom} est entré au cabinet`);
    console.log(`${patient2.nom} est ${patient2.maladie}`);
    console.log(`le traitement de ${patient2.nom} est ${traitement2.traitement}`);
    patient2.paye(doctor)
    console.log(`${patient2.nom} a ${patient2.argent}€ actuellement`);
    
    doctor.patientOut(patient2)
    console.log(`${patient2.nom} a quitté le cabinet`);
    patient2.goTo()
    console.log(`le traitement de ${patient2.nom} coûte ${traitement2.prix} euros`);
    patient2.takeCare()

    console.log("____________________________________________________________________");

    // SAN GOKU
    salleAttente.patient.splice(salleAttente.patient.indexOf(patient2), 1); console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);


    console.log("____________________________________________________________________");


    console.log(`${patient3.nom} est entré au cabinet`);
    console.log(`${patient3.nom} est ${patient3.maladie}`);
    console.log(`le traitement de ${patient3.nom} est ${traitement3.traitement}`);
    patient3.paye(doctor)
    console.log(`${patient3.nom} a ${patient3.argent}€ actuellement`);
    doctor.patientOut(patient3)
    console.log(`${patient3.nom} a quitté le cabinet`);
    patient3.goTo()
    console.log(`le traitement de ${patient3.nom} coûte ${traitement3.prix} euros`);
    patient3.takeCare();
    console.log(`${patient3.nom} est mort`);
    console.log("____________________________________________________________________");


    // DARTH VADER

    salleAttente.patient.splice(salleAttente.patient.indexOf(patient3), 1); console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);


    console.log("____________________________________________________________________");


    console.log(`${patient4.nom} est entré au cabinet`);
    console.log(`${patient4.nom} est ${patient4.maladie}`);
    console.log(`le traitement de ${patient4.nom} est ${traitement4.traitement}`);
    patient2.paye(doctor)
    console.log(`${patient4.nom} a ${patient4.argent}€ actuellement`);
    doctor.patientOut(patient4)
    console.log(`${patient4.nom} a quitté le cabinet`);
    patient4.goTo()
    console.log(`le traitement de ${patient4.nom} coûte ${traitement4.prix} euros`);
    patient4.takeCare()



    console.log("____________________________________________________________________");


    // SEMI COLON

    salleAttente.patient.splice(salleAttente.patient.indexOf(patient4), 1); console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);


    console.log("____________________________________________________________________");


    console.log(`${patient5.nom} est entré au cabinet`);
    console.log(`${patient5.nom} est ${patient5.maladie}`);
    console.log(`le traitement de ${patient5.nom} est ${traitement5.traitement}`);
    patient2.paye(doctor)
    console.log(`${patient5.nom} a ${patient5.argent}€ actuellement`);
    doctor.patientOut(patient5)
    console.log(`${patient5.nom} a quitté le cabinet`);
    patient5.goTo()
    console.log(`le traitement de ${patient5.nom} coûte ${traitement5.prix} euros`);
    patient5.takeCare()
    console.log(`${patient3.nom} est mort`);
    salleAttente.patient.splice(salleAttente.patient.indexOf(patient5), 1); console.log(`Dans la salle d'attente il y a ${salleAttente.patient.length} personnes`);