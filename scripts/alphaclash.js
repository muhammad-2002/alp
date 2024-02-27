function keyUpHandler (event){
    const expectedInput = event.key
    
    
   
    if(expectedInput === 'Escape'){
       gameOver()
    }
    const praseAlphabet = document.getElementById('current-alphabet').innerText 
    const displayAlphabet = praseAlphabet.toLowerCase()

    if(expectedInput === displayAlphabet){
        
       let scoreId = paresIntser('scoreId')
        scoreId+=1;
       setElementById('scoreId', scoreId)
    }else{
        removeBackgroudColorById(expectedInput)
        let lifeId = paresIntser('lifeId')
        lifeId-=1;
        setElementById('lifeId',lifeId)
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
    removeBackgroudColorById('current-alphabet')
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    setElementById('scoreId',0)
    setElementById('lifeId',5)
    
    
    continueGame()
    
    
}
function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    // const currentElements = getElementById('current-alphabet')
    // // window.location.reload()
    // console.log(currentElements)
     
}

