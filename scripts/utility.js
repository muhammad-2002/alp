// get Id
function getElementById(elementId){
    const element = document.getElementById(elementId)
    return element
}
//hide element
function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
//Show element
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
//set background color
function setBackgroudColorById(elementId){
    const setBackground = document.getElementById(elementId)
    setBackground.classList.add('bg-orange-400');

}
//remove background color
function removeBackgroudColorById(elementId){
    const setBackground = document.getElementById(elementId)
    setBackground.classList.remove('bg-orange-400');

}
//parse integer
function paresIntser (intser){
    const string = document.getElementById(intser).innerText
    const parsed = parseInt(string)
    return parsed

}
//set elementById
function setElementById(elementID,newElement){
    const element = getElementById(elementID)
    element.innerText = newElement

}
//random Alphabet
function randomAlphabet(){
    const Alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const Alphabet = Alphabets.split('')
    const randomNumber = Math.round(Math.random()*25)
    const randomAlphabet = Alphabet[randomNumber]
    return randomAlphabet;
    
}