import './styles.css';
import isPalindrome from './checker';

console.log("index.ts/start");

function buttonSubmitClick() {
    //Obtener referencia a inputText
    const inputText = <HTMLInputElement>document.getElementById('inputText');
    let bPalindrome = null;
    if (inputText) {
        //Invocar isPalindrome
        bPalindrome = isPalindrome(inputText.value);
        console.log(bPalindrome);
    }

    //Actualizar divResult
    const divResult = <HTMLDivElement>document.getElementById('divResult');
    if (divResult) {
        if (bPalindrome) {
            divResult.innerText = 'The word is palindrome!'
            //TODO: Implementa la asignación del atributo className con valor 'palindrome'
        } else {
            //TODO: Asigna a la propiedad innerText de divResult el valor 'The word is not palindrome, sorry.'
            divResult.className = "notPalindrome";
        }
    }
}

const btn = document.querySelector('button');
if (btn) {
  console.log('attaching listener');
  //TODO: invoca la función addEventListener de btn con parámetros 'click' y buttonSubmitClick
}


