const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

/* Creating Variables */

const btnEl = document.getElementById('btn-el')
const displayPasswordEl = document.getElementById('displayPassword-el')
const displayPassword2El = document.getElementById('displayPassword2-el')

/*  Adding Eventlistener */
btnEl.addEventListener('click',function(){
    let password1 = '';
    let password2 = '';
    for(let i = 0; i < 16; i++){

        let randomNumber = Math.floor(Math.random()* characters.length);
        password1 += characters[randomNumber]
    }
    for(let i = 0; i < 16; i++){

        let randomNumber = Math.floor(Math.random()* characters.length);
        password2 += characters[randomNumber]
    }

    
    displayPasswordEl.value = password1;
    displayPassword2El.value = password2;

   
})

/* Implementinc copy-on-click */
const passwordEl = document.getElementById('displayPassword-el')
const password2El = document.getElementById('displayPassword2-el')

passwordEl.addEventListener('click', function(){
    // select the password input field
    passwordEl.select();

    document.execCommand('copy');

    /*  try {
    // Copy the text inside the password input field to the clipboard
    document.execCommand('copy');
    console.log('Password copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy password: ', err);
  } */

})
password2El.addEventListener('click', function(){
    password2El.select()

    document.execCommand('copy')
})



