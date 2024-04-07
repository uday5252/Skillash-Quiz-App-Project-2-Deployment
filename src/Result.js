import React from 'react'
import { myBasket } from './App'

function Result() 
{
  const { myScore } = React.useContext(myBasket)//{ setGame: setGameState, myScore: score }
  // myScore = score
  return (
    <div>
        Your score is: {myScore}
    </div>
  )
}

export default Result

// render - It is a hosting platform where you can deploy your applications and make
// those applications accessible to everyone.