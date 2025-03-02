//import hook
import useFetch from "../hooks/useFetch"
//import rrc
import { useParams } from "react-router-dom"
//import react
import { useEffect } from "react"
//import component
import Test from "../components/Test"

function Quiz() {
  const {title} = useParams()
  const {data:quizzes, loading, error} =   useFetch(`https://67c3dfc689e47db83dd2ac27.mockapi.io/api/quiz/Quiz?title=${title}`) 



  useEffect(() => {
    document.title = `Quiz ${title}`
  }, [title])

  return <section className="quiz-container container">
     {loading && <div className="loader"></div>}
     {error && <div className="loaderErr"></div>}

     {quizzes && <Test question={quizzes[0]}/>}



  </section>
}

export default Quiz