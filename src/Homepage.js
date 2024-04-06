import React from 'react'
import { myBasket } from './App'

function Homepage() 
{
    const { setGame } = React.useContext(myBasket)//{ setGame: setGameState }
    // setGame = setGameState
    function startTheQuiz()
    {
        // Logic to navigate to Question component
        setGame("question")
    }

  return (
    <div>
        <button onClick={startTheQuiz}>Start Quiz</button>
    </div>
  )
}

export default Homepage