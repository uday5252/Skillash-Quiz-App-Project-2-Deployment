import React from 'react'


const questionsData = [
    {
        title: "What is the use of React?",
        A: "To develop games",
        B: "To develop User Interface",
        C: "Both A and B",
        D: "None of the Above",
        Answer: "B"
    },
    {
        title: "What is the use of Node.js?",
        A: "To develop server side programming",
        B: "To develop Games",
        C: "Both A and B",
        D: "None of the Above",
        Answer: "A"
    },
    {
        title: "What is 10 + 30?",
        A: 30,
        B: 40,
        C: 50,
        D: 60,
        Answer: "B"
    }
]

function Question() 
{
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = React.useState(0)
    // currentQuestionIndex = 0

    const [ answerSelected, setAnswerSelected ] = React.useState("")
    // answerSelected = ""

    const [ score, setScore ] = React.useState(0)
    // score = 0

    function goToNextQuestion()
    {
        // Logic to check the answer
        if(answerSelected == questionsData[currentQuestionIndex].Answer)
        {
            setScore(score + 1)
        }

        // Logic to go to the next question
        setCurrentQuestionIndex(currentQuestionIndex + 1)
    }

    function checkAndGoToResults()
    {
        // Logic to check the answer
        if(answerSelected == questionsData[currentQuestionIndex].Answer)
        {
            setScore(score + 1)
        }

        //Results Page
    }
    
  return (
    <div>
        <h1>{questionsData[currentQuestionIndex].title}</h1>

        <button onClick={function()
        {
            setAnswerSelected("A")
        }}>{questionsData[currentQuestionIndex].A}</button>
        <button onClick={function()
        {
            setAnswerSelected("B")
        }}>{questionsData[currentQuestionIndex].B}</button>
        <button onClick={function()
        {
            setAnswerSelected("C")
        }}>{questionsData[currentQuestionIndex].C}</button>
        <button onClick={function()
        {
            setAnswerSelected("D")
        }}>{questionsData[currentQuestionIndex].D}</button>

        { currentQuestionIndex == questionsData.length - 1 ? 
        <button onClick={checkAndGoToResults}>Submit</button> 
        :  
        <button onClick={goToNextQuestion}>Next</button> }
    </div>
  )
}

export default Question