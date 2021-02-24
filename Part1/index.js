const gamePlay = []

function play(clickedID){
    const playerTurn = document.getElementById('player')
    const clickedElement = document.getElementById(clickedID)
    if(playerTurn.innerText === 'X'){
        playerTurn.innerText = 'O'
        clickedElement.innerText = 'X'
        gamePlay[clickedID] = 'X'
    } else{
        playerTurn.innerText = 'X'
        clickedElement.innerText = 'O'
        gamePlay[clickedID] = 'O'
    }
    console.log(gamePlay)
    
    const topLeft = gamePlay[0]
    const topCenter = gamePlay[1]
    const topRight = gamePlay[2]
    const middleLeft = gamePlay[3]
    const middleCenter = gamePlay[4]
    const middleRight = gamePlay[5]
    const bottomLeft = gamePlay[6]
    const bottomCenter = gamePlay[7]
    const bottomRight = gamePlay[8]
    
    if(topLeft !== undefined && topLeft === topCenter && topLeft === topRight){
        alert(`${topLeft} is the winner`)
        return
    } else if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner`)
        return
    } else if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner`)
        return
    }else if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
        alert(`${topCenter} is the winner`)
        return
    }else if(topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`${topRight} is the winner`)
        return
    }else if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        alert(`${topRight} is the winner`)
        return
    }else if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
        alert(`${middleLeft} is the winner`)
        return
    }else if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
        alert(`${bottomLeft} is the winner`)
        return
    }
    
    let boardFull = true;
    for(let i = 0; i < 9; i++){
        if(gamePlay[i] === undefined){
            boardFull = false
        }
    }
    if(boardFull === true){
        alert(`cat's game, there is no winner`)
    }
    
    
    
    
    
}