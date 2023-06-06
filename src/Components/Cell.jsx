import '../App.css';
import {useEffect, useState} from "react";

function  Cell ({widthPercentage, gameStatus, id, activeCell, checkWin }) {
    const [selected, setSelected] = useState(null)

    useEffect(()=> {
        if(gameStatus === "new") {
            setSelected(null)
        }
    }, )

    const handleClick = (id, gameStatus, activeCell) => {
        if(gameStatus === 'recall'){
            setSelected(true)
            if(activeCell){
                checkWin()
            }
        }
    }

    const getClass = () => {
        let className = "cell";
        if (gameStatus === "memorize" && activeCell) {
            className += " active";
        }
        if(selected !== null) {
            className += " guess-" + activeCell
        }

        // if(gameStatus === "new"){
        //     className = "cell"
        // }

        return className
    }


    return (

        <div className={getClass()}
             onClick={() => handleClick(id, gameStatus, activeCell)}
             style={
                { width: `${widthPercentage}%` }}>

        </div>
    )
}

export default Cell
