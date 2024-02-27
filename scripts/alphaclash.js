let audio = new Audio()
let isPlayGame = false;
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
    console.log(randomAlphabets)
    
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
    
     
}

