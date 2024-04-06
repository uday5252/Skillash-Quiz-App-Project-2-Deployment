import React from "react"
import Homepage from "./Homepage";
import Question from "./Question";
import Result from "./Result";


export const myBasket = React.createContext()

function App() 
{
  const [ gameState, setGameState ] = React.useState("homepage")
  // gameState = "question"

  return (
    <div className="App">
      {/* Conditional Rendering */}

      <myBasket.Provider value={ { setGame: setGameState } }>
        { gameState == "homepage" && <Homepage /> }
      </myBasket.Provider>
      
      { gameState == "question" && <Question />}
      { gameState == "result" && <Result />}

    </div>
  );
}

export default App;
