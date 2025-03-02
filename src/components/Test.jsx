//hook import 
import { useState } from "react";
// import componenet 
import Result from "./Result";
import toast from "react-hot-toast";

function Test({question:{color, icon, title, questions}}) {
    const [answeredQuestions, setAnsweredQuestions] = useState(1);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [answerStatus, setAnswerStatus] = useState(null);
    const [statusDisabeled, setStatusDisabled] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        const correctAnswer = questions[questionIndex].answer;

        if (selectedAnswer === null) {
            toast.error('Please, select an answer!', {
                position: "bottom-center"
              })
            setStatusDisabled(false);
            setShowNextButton(false);
        } else {
            if (selectedAnswer === correctAnswer) {
                toast(' Good Job!', { icon: '👏 😉',});
                setAnswerStatus("correct")
                setCorrectAnswerCount(correctAnswerCount + 10)
                setStatusDisabled(true);
                setShowNextButton(true);
            } else {
                toast.error("Incorrect! Please try again. 😢");
                setAnswerStatus("incorrect")
                setStatusDisabled(true);
                setShowNextButton(true);
            }
            
        }

        
    }

    const handleNextQuestions = () => {
        if (questionIndex + 1 === questions.length)  {
            if (correctAnswerCount >= 50) {
                toast.success('🔥 You crushed it! The exam never stood a chance! 🎉');
            }
             else if (correctAnswerCount <= 40) {
                toast.error("Mission failed! But heroes never give up! 🚀 Try again!");
            }
            setQuestionIndex(questions.length);
        } else {
            setQuestionIndex(questionIndex + 1);
            setAnsweredQuestions(answeredQuestions + 1);
            setSelectedAnswer(null)
            setAnswerStatus(null)
            setShowNextButton(false)
            setStatusDisabled(false)
        }

    }

    if (questionIndex === questions.length) {
       return (
        <Result
        title={title}
        color={color}
        icon={icon}
        correctAnswerCount={correctAnswerCount}
        questions={questions} // ✅ Тўғри
        />
       )

      }


  return (
    <div className="test-container" key={title}>
        <div className="test-content">
            <p className="test-description">Question {answeredQuestions} of {questions.length}</p>
            <h2 className="test-title">
            {questions[questionIndex]?.question} 
            </h2>
            <div className="test-proccess-container">
                <div className="test-proccess" style={{width: (answeredQuestions / questions.length) * 100 + "%"}} ></div>
            </div>
        </div>
        <div className="test-questions">
            <form onSubmit={handleSubmit} >
                <ul className="test-list">
                {questions[questionIndex].options.map((option, index) => {
                        const absde = String.fromCharCode(65 + index);
                        let className = "";
                        if (answerStatus == "correct" && option == selectedAnswer) {
                            className = "correct";
                        } else if (answerStatus == "incorrect") {
                            if (option == selectedAnswer) {
                                className = "incorrect";
                            }
                            if (option == questions[questionIndex].answer) {
                                className = "correct";
                            }
                        }

                        return (
                            <li key={option}>
                            <label className={`test-label ${className} `}>
                                <span className="test-letter">{absde}</span>
                                <input type="radio" name="option" disabled={statusDisabeled} onChange={() => setSelectedAnswer(option)} />
                                <span className="test-text">{option}</span>
                                {/* icon true or false*/}
                                <img
                                className="test-icon-correct"
                                src="../assets/icon-correct.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                />
                                <img
                                className="test-icon-incorrect"
                                src="../assets/icon-incorrect.svg"
                                alt="icon"
                                width={40}
                                height={40}
                                />
                            </label>
                        </li>
                        )
                       
                        
                    })}
                </ul>
                {!showNextButton && <button className="btn test-btn">Submit Question</button>}
                {showNextButton && <button  onClick={handleNextQuestions} className="btn test-btn">
                    {questions.length == answeredQuestions ? "Finish" : "Next Question"}    
                </button>}
                 
            </form>
        </div>

    </div>
  )
}

export default Test