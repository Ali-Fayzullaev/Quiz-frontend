import { useState, useEffect } from "react"

import { useParams, Link } from "react-router-dom"

const toggleMode = () => {
  return localStorage.getItem("colorFon") || "light"
}



function Navbar() {
  const [theme, setTheme] = useState(toggleMode)

  const {title} = useParams()

  const handleThemeToggle = () => {
      const newTheme = theme == "dark-mode" ? "light" : "dark-mode"
      setTheme(newTheme)
  }

  useEffect(() => {
    document.body.classList = ("")
    document.body.classList.add(theme)
    localStorage.setItem("colorFon", theme)
  }, [theme])

  

  return (
    <header className='header'>
        <div className="header-container container">
          <div>
            { title &&
              <Link to="/" className="header-logo" >
                <figure>
                   <img src={`https://picsum.photos/60/60?random=${Math.random()}`} className=" rounded-2" alt={`${title}-icon`} />
                </figure>
                <span>{title}</span>
              </Link>
            }
          </div>

          <div>
            <div className="dark-btn" onClick={handleThemeToggle} >
              <input type="checkbox"  onChange={toggleMode}  checked={theme === "dark-mode"} />
              <span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Navbar