import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";


const API_URL = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';


function App()  {
  const[questions,setQuestions] =useState([]);
  const[currentIndex,setCurretIndex] = useState(0);
  const[score,setScore]= useState(0);
  const[showAnswers,setShowAnswers]= useState(false);


 useEffect(()=>{
   fetch(API_URL)
   .then(res => res.json())
   .then(data =>{
      const questions = data.results.map((question) =>({
        ...question,answer:[question.correct_answer, ...question.incorrect_answers].sort(()=>Math.random() - 0.5)
      }))
      setQuestions(questions)

   });
 },[]);

   const handleAnswer =(answer) => {
     if(!showAnswers){
     if(answer === questions[currentIndex].
      correct_answer){
        setScore(score +1);

      }
     }
       setShowAnswers(true);
       setTimeout(() => {

        setShowAnswers(false)
        setCurretIndex(currentIndex+1)

       }, 1000)


   };



 return questions.length > 0 ? (
<div className='container '>
  {currentIndex >= questions.length ? (
    <h1 className='text-3xl text-white font-bold'> Game ended! Your score is {score}.
    </h1>
  ):(

    <Questions
     data={questions[currentIndex]}
     showAnswers={showAnswers}
     handleAnswer={handleAnswer}/>
  )}
       </div>
  ):(
    <h2 className='text-2xl text-white
    font-bold'>Loading...</h2>
  );
}

export default App;