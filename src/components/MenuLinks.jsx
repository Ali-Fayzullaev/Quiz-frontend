import { Link } from "react-router-dom"
import  useFetch  from "../hooks/useFetch"


function MenuLinks() {
    const  {data:quizes, loading, error} = useFetch("https://67c3dfc689e47db83dd2ac27.mockapi.io/api/quiz/Quiz")
    
    console.log(quizes, loading, error)
  return (
    <div>
            {loading && <div className="loader"></div>}
            {error && <div className="loaderErr"></div>}

        <Link className="btn my-3" style={{width: "100%"}} to="/CreateTest">
             Create a Test
        </Link>
        <div className="menu-list">
            {quizes && quizes.map((list) => {
                return (
                    <Link to={`/quiz/${list.title}`}   key={list.id} className=" d-flex align-items-center heder-logo menu-item">
                        <figure  style={{backgroundColor: list.color}}>
                            <img src={`https://picsum.photos/50/50?random=${Math.random()}`} className=" rounded-2" alt={list.title}/>
                        </figure>
                        <span>{list.title}</span>
                    </Link>
                )
            })}
        </div>

    </div>
  )
}

export default MenuLinks