// javascript 
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const scoreDisplay = document.querySelector('#score')
let score = 0
let squares = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10
let appleIndex = 0
let intervalTime = 1000
let speed = 0.9
let timerId = 0

function createGrid() {
    for (let i=0; i < width*width; i++){
        const square = document.createElement('div')
        //add style to square
        square.classList.add('square')
        //putting squares into the div
        grid.appendChild(square)

        squares.push(square)
    }   
}

createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function startGame(){
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    squares[appleIndex].classList.remove('apple')
    //reset vars 
    clearInterval(timerId)
    currentSnake = [2,1,0]
    score = 0
    scoreDisplay.textContent = score
    direction = 1
    intervalTime = 1000
    generateApples()
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    timerId = setInterval(move, intervalTime)
}

function move() {
    if (
        //if snake hits bottom
        (currentSnake[0]+ width >= width*width && direction === width) ||
        //if snake hits right
        (currentSnake[0] % width === width-1 && direction === 1) ||
        //if snake hits left
        (currentSnake[0] % width === 0 && direction === -1) || 
        //if snake hits top
        (currentSnake[0] - width < 0 && direction === -width) || 
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
    //to stop snake from moving
    return clearInterval(timerId)
    //remove last element 
    const tail = currentSnake.pop()
    // remove styling from it
    squares[tail].classList.remove('snake')

    // add square in direction headed 
    currentSnake.unshift(currentSnake[0]+direction)

    //if the snake head and the apple are in the same pos
    if(squares[currentSnake[0]].classList.contains('apple')){
        //remove apple class
        squares[currentSnake[0]].classList.remove('apple')
        //grow snake by 1
        squares[tail].classList.add('snake')
        //grow snake array
        currentSnake.push(tail)
        //generate new apple
        generateApples()
        //add one to score
        score++
        scoreDisplay.textContent = score
        //speed up snake
        clearInterval(timerId)
        intervalTime = intervalTime * speed
        timerId = setInterval(move, intervalTime)
    }

    squares[currentSnake[0]].classList.add('snake')
}

function generateApples() {
    do {
        //generate random number
        appleIndex = Math.floor(Math.random() * squares.length)
    } while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}

generateApples()

function control(e){
    if(e.keyCode === 39){
        console.log("right")
        direction = 1
    } else if(e.keyCode === 38){
        console.log("up")
        direction = -width
    } else if(e.keyCode === 37){
        console.log("left")
        direction = -1
    } else if(e.keyCode === 40){
        console.log("down")
        direction = +width
    }
}

document.addEventListener("keyup", control)
startButton.addEventListener("click", startGame)