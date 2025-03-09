import { useState, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function CreateTest() {
  const formRef = useRef(null);
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: "" },
  ]);

  const axiosInstance = axios.create({
    baseURL: "https://67c3dfc689e47db83dd2ac27.mockapi.io/api/quiz",
  });

  const addNewQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], answer: "" },
    ]);
  };

  const handleChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "question" || field === "answer") {
      updatedQuestions[index][field] = value;
    } else {
      const optionIndex = parseInt(field.replace("option", ""));
      updatedQuestions[index].options[optionIndex] = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    axiosInstance
      .post("/Quiz", {
        title: form.title.value,
        questions: questions,
      })
      .then((res) => {
        console.log("Юборилди:", res.data);
        setQuestions([{ question: "", options: ["", "", "", ""], answer: "" }]);
        form.classList.remove("was-validated");
      })
      .catch((err) => {
        console.log("Хатолик:", err);
      });
  };

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 py-3">
          <form ref={formRef} className="mb-10 needs-validation" onSubmit={handleSubmit} noValidate>
            <div className="m-3 p-2 rounded-4 text-center bg-light text-black ">
              <label className="form-label fs-5 " >Quiz Title</label>
              <input className="form-control" placeholder="Quiz Title..." type="text" name="title" required />
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>

            {questions.map((q, index) => (
              <div className="row bg-light text-black rounded-3 p-3 mb-3" key={index}>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label ">Question {index + 1}</label>
                    <input
                      className="form-control"
                      type="text"
                      value={q.question}
                      onChange={(e) => handleChange(index, "question", e.target.value)}
                      required
                      placeholder="Question..."
                    />
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>

                  {["A", "B", "C", "D"].map((letter, i) => (
                    <div className="mb-3" key={i}>
                      <label className="form-label">Option {letter}</label>
                      <input
                        className="form-control"
                        type="text"
                        value={q.options[i]}
                        onChange={(e) => handleChange(index, `option${i}`, e.target.value)}
                        required
                        placeholder="Option...."
                      />
                      <div className="invalid-feedback">Please fill out this field.</div>
                    </div>
                  ))}

                  <div className="mb-3">
                    <label className="form-label ">Correct option</label>
                    <input
                      className="form-control border border-success border-3"
                      type="text"
                      value={q.answer}
                      onChange={(e) => handleChange(index, "answer", e.target.value)}
                      required
                      placeholder="Correct..."
                    />
                    <div className="invalid-feedback">Please fill out this field.</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-end">
                <button type="button" className=" rounded-circle border-white display-4 d-flex justify-content-center align-items-center plus " onClick={addNewQuestion}>
                  +
                </button>
              </div>
            </div>

            <br />
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTest;
