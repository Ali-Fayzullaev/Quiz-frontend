import { useRouteError, Link } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  if (error.status === 404) {
    return (
    <div className="image-container">
      <img src="../public/assets/404-error.jpg" className="imgErrorNotFound" alt="img-Error-Not-Found" />
      <div className="text-overlay">
        <h3>
        **404 - Page Not Found** <br />
        *"Oops! Looks like this page took a wrong turn and got lost in the digital wilderness. 🌵🚀 Try going back or exploring something else!"*
        </h3><br /><br />
        <Link to="/" ><button className="button-error">Go to 👉 Home</button></Link>
      </div>
    </div>
    )
  }
  
  return (
     
      <div className="text-overlay">
        <h3>
        "Oops! Something went wrong on our end. <br />
         Our team of highly trained hamsters is working hard to fix it!
       </h3><br /><br />
        <Link to="/" ><button className="button-error">Go to 👉 Home</button></Link>
      </div>
  )
}

export default ErrorPage