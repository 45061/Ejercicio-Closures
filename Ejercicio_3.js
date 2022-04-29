
function createGame(){
    const secretnumer = Math.floor( Math.random() * 100);
    return function(num){
        if( num >secretnumer){
            return 'Muy Alto'
        }
        else if(num<secretnumer){
            return 'Muy Bajo'
        }else{
            return '¡Adivinaste, felicitaciones!'
        }
    }
}

const guess = createGame();

let repeat = true;

do {
  const number = parseInt(prompt("Ingresa un numero"));
  const message = guess(number);
  if (message === "¡Adivinaste, felicitaciones!") repeat = false;

  alert(message);
} while (repeat);