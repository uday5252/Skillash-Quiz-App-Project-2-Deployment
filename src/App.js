import React from "react"
import Homepage from "./Homepage";
import Question from "./Question";
import Result from "./Result";

// Wherever Result component is called, in the same file we will have score variable created

export const myBasket = React.createContext()

function App() 
{
  const [ gameState, setGameState ] = React.useState("homepage")
  // gameState = "result"

  const [ score, setScore ] = React.useState(0)
  // score = 0

  return (
    <div className="App">
      {/* Conditional Rendering */}

      <myBasket.Provider value={ { setGame: setGameState, myScore: score, mySetScore: setScore } }>
        { gameState == "homepage" && <Homepage /> }
        { gameState == "result" && <Result />}
        { gameState == "question" && <Question />}
      </myBasket.Provider>
    </div>
  );
}

export default App;
