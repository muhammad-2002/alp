let audio = new Audio()
let isPlayGame = false;
const  alphabetBord = getElementById('artboard')
const modals = getElementById('modals')
const x = getElementById('x')
function keyUpHandler (event){
    if (isPlayGame ===false) return
    const expectedInput = event.key
    
    
   
    if(expectedInput === 'Escape'){
       gameOver()
    }
    const praseAlphabet = document.getElementById('current-alphabet').innerText 
    const displayAlphabet = praseAlphabet.toLowerCase()

    if(expectedInput === displayAlphabet){
        
        
        audio.src='/audio/audio1.wav'
        audio.play()
       let scoreId = paresIntser('scoreId')
        scoreId+=1;
       setElementById('scoreId', scoreId)
       
    }else{
        removeBackgroudColorById(expectedInput)
        let lifeId = paresIntser('lifeId')
        lifeId-=1;
        setElementById('lifeId',lifeId)
        audio.src='/audio/audio2.wav'
        audio.play()
        const parsentangeColor = (lifeId/5)*100;
        alphabetBord.style.background = `linear-gradient(#FFFFFFB3 ${parsentangeColor}% ,red)`


        if(lifeId === 0){
            
            let finalScore = getElementById('total')
            finalScore.innerText = scoreId.innerText
            gameOver()
        }
    }
   
    removeBackgroudColorById(displayAlphabet)
    continueGame()
}
document.addEventListener('keyup',keyUpHandler)
function continueGame(){
    const randomAlphabets = randomAlphabet()
    const currentAlphabet = getElementById('current-alphabet')
    currentAlphabet.innerText = randomAlphabets
    setBackgroudColorById(randomAlphabets)
   
}


function play(){
    isPlayGame = true
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    setElementById('scoreId',0)
    setElementById('lifeId',5)
    const praseAlphabet = document.getElementById('current-alphabet').innerText 
    const displayAlphabet = praseAlphabet.toLowerCase()
    removeBackgroudColorById(displayAlphabet)
    
    
    continueGame()
    
    
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    isPlayGame= false
    alphabetBord.style.background = `linear-gradient(#FFFFFFB3 100% ,red)`
    
     
}
function openmodal(event){
    if(event.clientY <=20){
        modals.style.display = 'flex'
    }

}
function closeModal(){
    
    modals.style.display ='none'
}
document.body.onmouseover = openmodal

