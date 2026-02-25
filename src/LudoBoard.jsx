import {useState} from "react";


export default function LudoBoard() {
    let [moves , setMoves] = useState({blue:0, red:0,yellow:0 , green:0});
       //object

    //array and state
    let [arr, setArr] = useState(["no moves"]);


    let updateBlue = () =>{

        //object and state
        // moves.blue += 1;
        // setMoves({...moves});

        setMoves((prevMoves)=>{ //use when case 1.
            return {...prevMoves , blue: prevMoves.blue+1} //using spreading
        });

        //array and state
        setArr((prevArr)=>{
            return [...prevArr, "blue moves"];
        });
    };

    return(
        <div>
            <p>Game Begins</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button style={{backgroundColor:"yellow" }}>+1</button>
                <p>Green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}}>+1</button>
                <p>Red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    );
}