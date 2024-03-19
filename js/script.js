// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Per preparare il gioco seleziono dall'HTML la griglia, il bottore 'gioca' e il livello di difficoltà scelto dall'utente nella select.
const grid = document.querySelector('.grid')
const btn = document.querySelector('#btn');
const scoreMessage = document.querySelector('.score')
const scoreComment = document.querySelector('.score-comment')
let difficulty = document.querySelector('#difficulty');
// Assegno una score pari a zero che verrà incrementata di 1 ogni qualvolta l'utente clicca su un quadrato 'non bomba'

// Al click del bottone genero la griglia di quadrati in base alla difficoltà inserita dall'utente. 
// La griglia, essendo un quadrato, deve avere il lato con lunghezza pari a √(numeri nella griglia) quadrati
btn.addEventListener('click', function(){
    let score = 0;
    scoreMessage.classList.remove('active');
    grid.innerHTML = ''
    let value = difficulty.value;
    let numberPerRow = Math. sqrt(value)
    // Creo un array di 16 bombe univoche e casuali, che hanno come valore minimo 1 e come valore massimo il numero maggiore della griglia
    let bombs = []
    while(bombs.length < 16){
        let bomb = Math.floor(Math.random() * (value - 1 + 1)) + 1;
        if (!bombs.includes(bomb)){
            bombs.push(bomb)
        }
    }
    // Creo un ciclo for che, utilizzando una funzione, genera un quadrato che ha come lato 100% / √(numeri nella griglia) 
    for(let i = 1; i <= value; i++){
        const newSquare = generateSquare(i);
        newSquare.style.width = `calc(100% / ${numberPerRow})`
        newSquare.style.height = `calc(100% / ${numberPerRow})`
        // Aggiungo i quadrati alla griglia
        grid.append(newSquare);
        // Al click il quadrato si colora di blu se questo non è una bomba. 
        // Ovvero, se il numero del quadrato cliccato non è compreso nell'array di bombe. 
        // Inoltre, per ogni click su un quadrato non bomba, la score aumenta di uno.
        // Altrimenti il quadrato si colora di rosso e mostra il 
        newSquare.addEventListener ('click', function(){
            if (!bombs.includes(i)){
                score += 1
                this.classList.add('blue')
            } else {
                this.classList.add('red')
                scoreMessage.classList.add('active');
                scoreComment.innerHTML = 'Hai trovato una bomba, il tuo punteggio è ' + score + '/' + (value - 16) 
            }
        })  
    }
})

// La funzione genera un elemento del DOM, un div con classe square.
// All'interno di questo viene aggiunto uno span con il numero dato all'interno
function generateSquare(number){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = '<span>' + number + '</span>';
    return newSquare;
}