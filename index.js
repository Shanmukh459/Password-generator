const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.getElementById("pwd1")
let passwordEl2 = document.getElementById("pwd2")


function generatePassword() {
    let password1 = getPassword()
    let password2 = getPassword()
    
    passwordEl1.innerText = password1
    passwordEl2.innerText = password2
}

function getPassword() {
    const pwdLength = document.getElementById("pwd-len")
    const len = pwdLength.value ? pwdLength.value : 15
    let tempPass= ""

    for (let i = 0; i < len; i++){
        tempPass += characters[Math.floor(Math.random() * characters.length)]
    }
    return tempPass
}

function copyText1() {  
    navigator.clipboard.writeText(passwordEl1.innerText)
    alert("Copied the text: " + passwordEl1.innerText)
}

function copyText2() {  
    navigator.clipboard.writeText(passwordEl2.innerText)
    alert("Copied the text: " + passwordEl2.innerText)
}






