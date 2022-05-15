const charSet = "avcdefrty12345ABCDEFGHIJKLMN6789OPQRSTUVWXYZ@#$$%^abcdefghi))((*&_+)(*&jklmnopqrstuvwzyz12231212121"

const firstEl = document.getElementById("first")
const secondEl = document.getElementById("second")
const thirdEl = document.getElementById("third")
const fourthEl = document.getElementById("fourth")
const mainBtnEl = document.getElementById("main-button")
const sliderEl = document.getElementById("slider-el")
const charEl = document.getElementById("char-el")


function randWord(passLength){
    let pass = ""
    let newChar = ""
    let x = 0
    for(let i =1 ; i<=passLength ; i++){
        x = randomNum()
        newChar = charSet.substring(x, x+1)
        pass += newChar
    }
    return pass
}

sliderEl.addEventListener("input", function(){
    charEl.textContent = sliderEl.value
    firstEl.value = randWord(sliderEl.value)
    secondEl.value = randWord(sliderEl.value)
    thirdEl.value = randWord(sliderEl.value)
    fourthEl.value = randWord(sliderEl.value)
})


function randomNum(){
    return Math.floor((Math.random()*100)+1)
}


function copyOne(){
    firstEl.select()
    firstEl.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(firstEl.value)
    alert(`Copied to clipboard : ${firstEl.value}`)
}
function copyTwo(){
    secondEl.select()
    secondEl.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(secondEl.value)
    alert(`Copied to clipboard : ${secondEl.value}`)
}
function copyThree(){
    thirdEl.select()
    thirdEl.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(thirdEl.value)
    alert(`Copied to clipboard : ${thirdEl.value}`)
}

function copyFour(){
    fourthEl.select()
    fourthEl.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(fourthEl.value)
    alert(`Copied to clipboard : ${fourthEl.value}`)
}




