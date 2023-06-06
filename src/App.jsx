import './App.css';
import Game from "./Components/Game";
import {useState} from "react";


function App() {

    const [value, setValue] = useState(3)
    const [start, setStarted] = useState(false)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
    <>
        <div className="App" >
            <div>

                <p>Difficulty: {value}</p>
                <input disabled={start} type="range"
                       min="3" max="7" step ="1" value={value} onChange={handleChange}/>
            </div>

        </div>
        <Game gridSize={value} getStatus={setStarted} />
    </>
  );
}

export default App;
