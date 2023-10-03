let userName;
userName = prompt('qual è il tuo nome?');
console.log(userName);

let lastName;
lastName = prompt('qual è il tuo cognome?');
console.log(lastName);

let favColor;
favColor = prompt('qual è il tuo colore preferito?');
console.log(favColor);

let randomNumber;
randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

let password = userName + lastName + favColor + randomNumber;
console.log(password);


const passwordDomElement = document.getElementById('password');
passwordDomElement.innerHTML = password;