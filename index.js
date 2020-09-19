// javascript 
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.querySelector('#score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1

function createGrid() {
    for (let i=0; i < 100; i++){
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

function move() {
    //remove last element 
    const tail = currentSnake.pop()
    // remove styling from it
    squares[tail].classList.remove('snake')

    // add square in direction headed 
    currentSnake.unshift(currentSnake[0]+direction)

    squares[currentSnake[0]].classList.add('snake')
}

move()

// let timerId = setInterval(move, 1000)

function control(e){
    if(e.keyCode === 39){
        console.log("right")
    } else if(e.keyCode === 38){
        console.log("up")
    } else if(e.keyCode === 37){
        console.log("left")
    } else if(e.keyCode === 40){
        console.log("down")
    }
}

document.addEventListener("keyup", control)