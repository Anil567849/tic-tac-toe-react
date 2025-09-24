import './App.css';
import { useEffect, useState } from 'react';

// 9 box - empty
// alternate turn
// checking for success -> game end or resend



function App() {

  let [turn, setTurn] = useState("A");
  let [game, setGame] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);

  function gameReset(){
    setGame([["", "", ""], ["", "", ""], ["", "", ""]])
  }

  function checkGame(){

    // check all rows
    for(let i = 0; i < 3; i++){
      let val = game[i][0];
      let ans = true;
      for(let j = 1; j < 3; j++){
        if(val == "" || game[i][j] == "" || val != game[i][j]){
          ans = false;
          break;
        }
      }
      if(ans){
        alert("winner - " + val);
        gameReset()
        break;
      }
    }
    // check all cols
    for(let i = 0; i < 3; i++){
      let val = game[0][i];
      let ans = true;
      for(let j = 1; j < 3; j++){
        if(val == "" || game[i][j] == "" || val != game[j][i]){
          ans = false;
          break;
        }
      }
      if(ans){
        alert("winner - " + val);
        gameReset()
        break;
      }
    }
    // check all diagonal
    let i = 1, j = 1;
    let val = game[0][0];
    let loop = 2;
    let ans = true;
    while(i < 3){
      if(val == "" || game[i][j] == "" || val != game[i][j]){
        ans = false;
        break;
      }
      i += 1;
      j += 1;
    }
    if(ans){
      alert("winner - " + val);
      gameReset()
    }
    // check all diagonal
    val = game[0][2];
    i = 1;
    j = 1;
    loop = 2;
    ans = true
    while(i < 3){
      if(val == "" || game[i][j] == "" || val != game[i][j]){
        ans = false;
        break;
      }
      i += 1;
      j -= 1;
    }
    if(ans){
      alert("winner - " + val);
      gameReset()
    }

    let allUsed = true;
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        if(game[i][j] == ""){
          allUsed = false;
          break;
        }
      }
      if(allUsed == false) break;
    }

    if(allUsed) gameReset()

  }
  
  function handleClick(i, j){
    if(game[i][j] != "") return;
    game[i][j] = turn;

    if(turn == "A"){
      setTurn("B");
    }else{
      setTurn("A");
    }
    checkGame();
  }


  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Boxes handleClick={handleClick} game={game} />
    </div>
  );
}

function Boxes({handleClick, game}){

  let arr = [1, 2, 3]
  return (
    <div>  
      {
        arr.map((val, i) => {
          return (
          <div key={i} style={{display: "flex"}}>
            {
              arr.map((_, j) => {
                return (
                <div 
                key={j}
                onClick={() => handleClick(i, j)}
                style={{height: "100px", width: "100px", border: "2px solid black", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  {game[i][j]}
                </div>
                )
              })
            }
          </div>
          )
        })
      }
    </div>
  )

}

export default App;

