

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?:faccia_nerd:
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


//Creo una funzione per generare numeri da 1 a 100

for (let number = 1; number <= 100; number++) {

    // Se il numero è divisibile per 3 e 5 .toExponential.apply. 

    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    
    // altrimenti se solo per 3... 

    } else if (number % 3 === 0) {
        console.log("Fizz");
    }
     
    // altrimenti se solo per 5... 

    else if (number % 5 === 0) {
        console.log("Buzz");
    }
    
    // altrimenti se per nessuno dei due ... 

    else {
        console.log(number);
    }
}
    // aggiungo un div con classe square 

for (let numero = 1; numero <= 100; numero++) {
    let risultato = document.createElement('div');
    risultato.className = 'square';

    if (numero % 3 === 0 && numero % 5 === 0) {
        risultato.textContent = "FizzBuzz";
        risultato.classList.add('fizzbuzz');
    } else if (numero % 3 === 0) {
        risultato.textContent = "Fizz";
        risultato.classList.add('fizz');
    } else if (numero % 5 === 0) {
        risultato.textContent = "Buzz";
        risultato.classList.add('buzz');
    } else {
        risultato.textContent = numero;
        risultato.classList.add('numero');
    }

    // lo inietto in container ... 

    document.getElementById('container').appendChild(risultato);
}