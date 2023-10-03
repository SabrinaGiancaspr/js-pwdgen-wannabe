// nome 

let userName;
userName = prompt('qual è il tuo nome?');
console.log(userName);

// cognome 

let lastName;
lastName = prompt('qual è il tuo cognome?');
console.log(lastName);

// colore 

let favColor;
favColor = prompt('qual è il tuo colore preferito?');
console.log(favColor);

// random number 

let randomNumber;
randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

// password 

let password = userName + lastName + favColor + randomNumber;
console.log(password);


// stampa html 

const passwordDomElement = document.getElementById('password');
passwordDomElement.innerHTML = password;