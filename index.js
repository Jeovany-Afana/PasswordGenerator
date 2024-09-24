const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é\"'(-è_çà^$*ùm!:;.?,/§%£¨µ+=°)^@\|[{#~";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById('password-output');
const customerText = document.getElementById("customer-text-input");
const customerTextAsk = document.getElementById("customer-text-ask");

function show_input_word() {
   customerTextAsk.addEventListener("click", function(){customerText.style.display="block"})
}

function  generatePassword()
    {
        let data = [];
        let password = "";
        let customer_word = ''; //Variable qui va stocker le mot saisi par l'utilisateur (S'il en saisit un)
        let randomNumber = 0;

        if(lowercase.checked) data.push(...dataLowercase);
        if(uppercase.checked) data.push(...dataUppercase);
        if(numbers.checked) data.push(...dataNumbers);
        if(symbols.checked) data.push(...dataSymbols);

        if (input.value != '') { //On vérifie le input qui doit recevoir le mot de l'utilisateur, on vérifie si le input n'est pas vide

            customer_word = input.value; //Le input n'est pas vide donc on récupère le mot contenu dans le champs
            randomNumber = Math.floor(Math.random() * 3) + 1; //On génère un nombre aléatoire entre 1 et 3 pour connaitre ou on va ajouter le mot de l'utilisateur dans la chaine
        }


        if (input.value.length > 24) {//Si le mot de passe saisi par l'utilisateur est plus grand que le nombre max de caractères
            alert("Vous ne pouvez pas avoir un mot de passe de plus de 24 caractères !");
            return
            
        }

        if (randomNumber === 1) { //Si le nombre aléatoire est égal à 1 alors on met le mot de l'utilisateur au début du mot de passe

            password = customer_word;
            
        }


        if(data.length === 0 && input.value === '')
        {
            alert("Veuillez sélectionner des critères ou entrer une chaine");
            return; 
        }

        
        for(i = 0; i < rangeValue.value - parseInt(customer_word.length); i++) //On parcours de 0 jusqu'au nombre de caractères choisi - le nombre de caractères saisis
        {
            if(randomNumber === 2 && i === Math.floor(rangeValue.value / 2))
                {
                    password += customer_word;
                } // Si le nombre aléatoire est égal à 2 alors on met le mot de l'utilisateur au milieur du MDP
            password += data[Math.floor(Math.random() * data.length)];

        }

        if (randomNumber === 3) {//Si le nombre aléatoire est égal à 3 alors on ajouter le mot de l'utilisateur à la fin

            password += customer_word;
        }

        if ((password + customer_word).length > 24) {
            
            alert("Votre mot de passe est trop long !");
            return
        }


        passwordOutput.value = password;


        passwordOutput.select();// Pour sélectionner le mot de passe
       document.execCommand("copy");// Permet de copier le texte sélectionner
        
       generateButton.textContent = "Copied !";

       alert(`Mot de passe ${passwordOutput.value}  copié ! 😊`);

       setTimeout(()=> {
        generateButton.textContent = "Generate Password";
       }, 2000)
    }

    window.onload = function() {
        var myModal = new bootstrap.Modal(document.getElementById('exampleModalScrollable'));
        myModal.show();
      };
      

generateButton.addEventListener("click",generatePassword)
