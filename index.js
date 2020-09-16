// javascript 
const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const score = document.querySelector('#score')
let squares = []
let currentSnake = [0,1,2]

function createGrid() {
    for (let i=0; i < 100; i++){
        const square = document.createElement('div')
        console.log(square)
        //add style to square
        square.classList.add('square')
        //putting squares into the div
        grid.appendChild(square)

        squares.push(square)
    }   
}

createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))