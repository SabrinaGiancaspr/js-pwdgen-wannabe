let userName;
userName = prompt('qual è il tuo nome?');
console.log(userName);

let LastName;
LastName = prompt('qual è il tuo cognome?');
console.log(LastName);

let FavColor;
FavColor = prompt('qual è il tuo colore preferito?');
console.log(FavColor);


let Password = userName.concat(LastName, FavColor);
console.log(Password);