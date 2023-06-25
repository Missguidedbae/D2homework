/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* 
ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

DATATYPES:

- STRING : è utilizzato per il testo e si possono inserite tutti i caratteri, anche numeri o simboli. Una string per essere tale è circondata doppi o singoli apici come "..." o '...'
Esempio: const x = "Hello World"; const x = '"Hello" World';

- NUMBER : è utilizzato per numeri interi (come 5) o a virgola mobile (come 1,5).
Esempio: const x = 5;

- BOOLEAN : è una entità logica che ha solo due valori, vero o falso.
Esempio: const x = true; const x = false;

- UNDEFINED : si usa per rappresentare una variabile non dichiarata o che non è stato ancora assegnato un valore specifico.
Eseprio: const x; const x = undefined;

- NULL : indica che alla variablie non è stato assegnato un valore (di proposito).
Esempio: const x = null;
*/

/*
ESERCIZIO 2
Descrivi cos'è un oggetto in JavaScript, con parole tue.

Un oggetto in JavaScript è un contenitore di dati, di elementi caratterizzati ciascuno da un nome/proprietà e da un valore. I diversi tipi di oggetti li ho specificati nella risposta precedente.
*/

/* 
ESERCIZIO 3
Scritvi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.

RISPOSTA:
const totale = 12 + 20;
console.log(totale);

oppure anche

const a = 12;
const b = 20;
console.log(a + b);
*/

/*
ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.

RISPOSTA:
const x = 12;
console.log(x);
*/

/*
ESERCIZIO 5
Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.

RISPOSTA:
const name = "Federica";
console.log(name);
*/

/*
ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).

RISPOSTA:
const x = 12;
console.log(4-x);
*/

/*
ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().

RISPOSTA:
const name1 = "john";
const name2 = "John";

console.log(name1 !== name2);

console.log(name1 === name2.toLowerCase());
*/