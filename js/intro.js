// console.log skriver ut til consollen i developer tools på nettsiden
console.log("hello world!");

// let definerer en variabel som får lov til å endres på senere
// Verdien er type STRING
let ord1 = "hello";

// const definerer en variabel som IKKE får lov til å endres på senere.
// Verdien er type STRING
const ord2 = "World!";

// man kan skrive ut variabler i konsoll loggen og man kan bruke "+" (concatenation operator) for å skrive ut flere. Her er det langt til et mellomrom mellom variablene man skriver ut
// Verdien er type STRING
console.log(ord1 + " " + ord2);
// Her bruker man TEMPLATE LITERALS. Istedet for gåseøyne setter man BACKTICKS og refererer til variabler med ${variabelNavn}. Alle mellomrom blir med i svaret.
//Verdien er type STRING
console.log(`${ord1} ${ord2}`);

// Lager nye variebler som setter verdien til helltall (INTEGER)
let nummer = 1;
const nummer2 = 2;

console.log("nummer er: " + nummer);
console.log("nummer2 er: " + nummer2);

// Kombinerer verdien av de 2 variablene sammen:

let sum = nummer + nummer2;

// Konsoll logger resultatet, men legger til en text i tillegg:
console.log("summen er: " + sum);

// Endre på verdien til nummer:
nummer = 5
// sum blir ikke oppdatert siden sum er definert over redifineringen av nummer
console.log("summen er ikke oppdatert: " + sum);
console.log("men nummer har fått en ny verdi: " + nummer);

// Vi må i DETTE tilfelle skrive sum = nummer + nummer2; på nytt for at det skal konsoll logges riktig
sum = nummer + nummer2;
console.log("summen er oppdatert: " + sum);

//* double operators

// øker nummer med 1:
nummer++;
console.log("nummer++: tallet øker med 1: " + nummer);
nummer--;
console.log("nummer--: tallet minsker med 1: " + nummer);
nummer*=nummer;
console.log("nummer*=nummer: ganger tallet med seg selv: " + nummer);
nummer/=nummer;
console.log("nummer/=nummer: deler tallet med seg selv: " + nummer);


//* Arrays

// [] definerer at dette er datatype ARRAY. Skrives sånn ["index0", "index1", "index3"]
let fruitsArray = ["banan", "jordbær", "tomat", "kiwi"];

// konsoller logger man hele arrayet får man hele arrayet i konsoll loggen. SHOCK!
console.log(fruitsArray);

// ved å skrive [hvilken index] kan man skrive ut enkelte objekter fra arrayet
// her skriver man ut det ANDRE objektet, altså det som er i index 1. Det første i arrayet er [0]
console.log(fruitsArray[1]);

// .push er en metode for å legge til et element på slutten av et array:
fruitsArray.push("eple");

console.log(fruitsArray);
// .pop er en metode for å fjerne det siste elementet i et array:
fruitsArray.pop();
console.log(fruitsArray);
// .length er en property av elementet man skriver før. Her finner man lengden på arrayet:
console.log(fruitsArray.length);
//! lag en funksjon senere som gjør denne fleksibel og gjenbrukbar:
console.log(fruitsArray[fruitsArray.length - 1])
// .splice er en metode for å fjerne noe spesifikt fra et array med å definere (startindex, hvor mange indexer man skal fjerne)
// her fjerner vi kun index 1. Vi kan skrive dette i konsoll loggen for å se hva vi splicer bort:
//! Finn ut hvordan man hindrar at arrayet blir endret permanent:
console.log(fruitsArray.splice(1, 1));
console.log(fruitsArray); // arrayet er nå [banan, tomat, kiwi]
// Index 1 er ikke lengere jordbær siden vi allerede har splicet arrayet (fungerer selv om det kun er i konsoll loggen)
fruitsArray.splice(1, 1);

console.log(`tomat skal ha blitt slicet bort: ${fruitsArray}`);


//* Objekter

const person = {
    firstName: "Joakim",
    lastName: "Villo",
    age: 35,
    hobbies: ["Gaming", "Trening", "Filmer"],
  };
//! Lag en funksjon til dette for å gjøre den mer fleksibel og gjenbrukbar
const fullName = `${person.firstName} ${person.lastName}`

console.log(fullName)
console.log(person.hobbies[0])
  console.log(person.hobbies[0]);


  // Dette er et eksempel på et objekt med 4 keys (firstName, lastName, age og hobbies) og 5 values (Joakim, Villo, 35 og verdiene i hobbies), og hvordan å hente ut en av disse:
const persons = [
    {
      firstName: "Joakim",
      lastName: "Villo",
      age: 35,
      hobbies: ["Gaming", "Trening", "Filmer"],
    },
    {
      firstName: "Bob",
      lastName: "Dylan",
      age: 80,
      hobbies: ["Music", "MJ", "Jamaican food"],
    },
  ];
  
  console.log(persons[0].firstName);
  console.log(persons[1].lastName);
  console.log(persons[1].hobbies[1]);

  const joakim = persons[0];

  console.log(joakim.hobbies[1]);