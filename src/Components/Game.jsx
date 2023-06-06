import {useState,} from "react";
import Cell from "./Cell";


const initialState = []

function Game({gridSize, getStatus}) {
    const [status, setStatus] = useState("new")// memo, recall
    const [challengeCells, setChallengeCells] = useState(initialState)
    const [winningGame, checkIfWin] = useState(1)


    const gridArray = (size) =>  Array.from({ length: size }, (v, i) => i);

    let cellWidthPercentage = 80 / gridSize;
    const grid = gridArray(gridSize * gridSize)

    const getRandom = (game) => {
        let cells = []
        let difficultyLevel = Math.floor(grid.length*0.4)

        while(cells.length < difficultyLevel){
            let randomNum = Math.trunc(Math.random() * game.length-1)
            if(cells.indexOf(randomNum) === -1) {
                cells.push(randomNum)
            }
        }
        return cells
    }

    const startGame = () => {
        setStatus('new')
        getStatus(true)
        checkIfWin(1)
        setTimeout(() => {
            setStatus('memorize' )
                let newChallenge = getRandom(grid)
                setChallengeCells(newChallenge)
            setTimeout(() => {
                setStatus("recall" )
            }, 2500)
        },1000 );
    }

    const isWin = () => {
        checkIfWin(winningGame+1)
        if(winningGame === challengeCells.length){
            setStatus('win')
            getStatus(false)
        }
    }
    let disabled = status === "new" || status === "win"
    let TextBtn = status === "win" ? "New Game" : "Game"
    return (
        <>
            <div className="App" >
                <div className="start">
                    <h1>Memory Game</h1>

                    <button disabled={!disabled} onClick={() => startGame()}>{TextBtn}</button>
                </div>
                {grid.map((cellId, idx) => {
                    let isOnPlay = challengeCells.includes(idx)
                    return  <Cell key={cellId}
                                 id ={idx}
                                 activeCell = {isOnPlay}
                                 gameStatus = {status}
                                 widthPercentage={cellWidthPercentage}
                                 checkWin = {isWin}
                   />})
                }

            </div>
        </>
    );
}

export default Game;
