import React from 'react'

 const Questions= ({ 
    showAnswers,
    handleAnswer, 
    data:{question,correct_answer,answer}}) => {


    return (
  <div> 
   <div className='bg-white text-purple-800 p-10 rounded shadow-md '>
        <h2 
        className='text-2xl'
         dangerouslySetInnerHTML={{__html:question}}/>

      </div>
       <div className='grid grid-cols-2 gap-6 mt-6 '>
      
      {answer.map((answer,id) =>{
           const textColor = showAnswers ?
           answer === correct_answer ? 'text-green-500' : 'text-red-500' :'text-purple-500';
                   

          return (  
        <button
        key={id}
        className={ `bg-white ${textColor} p-4  
        font-semibold rounded shadow font-size:60px ` }
            onClick={()=>handleAnswer(answer)}>
         {answer}
           </button>
         

       )})}
         </div>

         </div>
   );
};


export default Questions; 