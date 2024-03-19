// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

const grid = document.querySelector('.grid')
const btn = document.querySelector('#btn');
let difficulty = document.querySelector('#difficulty');


btn.addEventListener('click', function(){
    grid.innerHTML = ''
    let value = difficulty.value;

    let numberPerRow = Math. sqrt(value)
    console.log(numberPerRow)
    
    for(let i = 1; i <= value; i++){
        const newSquare = generateSquare(i);
        
        newSquare.style.width = `calc(100% / ${numberPerRow})`
        newSquare.style.height = `calc(100% / ${numberPerRow})`
        
        grid.append(newSquare);

        newSquare.addEventListener ('click', function(){
            this.classList.add('blue')
        })
    }

})

function generateSquare(number, value){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = '<span>' + number + '</span>';
    return newSquare;
}