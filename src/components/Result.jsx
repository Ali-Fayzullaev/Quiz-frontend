import { Link } from "react-router-dom";

function Result({ title, color, icon, correctAnswerCount, questions }) {
    if (!questions) return null; // 🔥 Agar questions yo'q bo'lsa, hech narsa ko'rsatma

    return (
        <div className="test-container result-container">
            <div className="home-content">
                <h1 className="home-title">
                    <span>Quiz completed</span>
                    <span>You scored...</span>
                </h1>
            </div>
            <div className="test-completed">
                <div className="test-completed-body" style={correctAnswerCount >= 50 ? { border: "7px solid green", color: "green" } : { border: "7px solid red", color: "red" }} >
                    <div className="menu-item header-logo">
                        <figure style={{ backgroundColor: color }}>
                            <img src={`.${icon}`} alt={title} />
                        </figure>
                        <span>{title}</span>
                    </div>
                    <div className="big-text">{correctAnswerCount}%</div>
                    <p>out of {questions.length}</p> 
                </div>
                <Link className="btn" to="/">
                    Play Again
                </Link>
            </div>
        </div>
    );
}

export default Result;
