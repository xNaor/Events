
import React, { useState } from "react";

function Questionnaire() {
  const questions = [
    { id: 1, text: "איזה סוג אירוע אתה מתכנן?", type: "select", options: ["חתונה", "בר מצווה", "אירוע חברה", "אחר"] },
    { id: 2, text: "כמה משתתפים צפויים?", type: "number" },
    { id: 3, text: "מהו טווח התקציב שלך?", type: "range", min: 5000, max: 100000 },
    { id: 4, text: "בחר תאריך מועדף", type: "date" },
    { id: 5, text: "איזה סגנון אתה אוהב?", type: "tags", options: ["Modern", "Boho", "Crazy", "Eco", "Minimal"] }
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleChange = (e, key) => {
    setAnswers({ ...answers, [key]: e.target.value });
  };

  const handleNext = () => {
    if (step < questions.length - 1) setStep(step + 1);
  };

  const progress = ((step + 1) / questions.length) * 100;

  const renderQuestion = () => {
    const q = questions[step];
    switch (q.type) {
      case "select":
        return (
          <select onChange={(e) => handleChange(e, q.id)}>
            <option>בחר</option>
            {q.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        );
      case "number":
        return <input type="number" onChange={(e) => handleChange(e, q.id)} />;
      case "range":
        return (
          <input
            type="range"
            min={q.min}
            max={q.max}
            onChange={(e) => handleChange(e, q.id)}
          />
        );
      case "date":
        return <input type="date" onChange={(e) => handleChange(e, q.id)} />;
      case "tags":
        return (
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {q.options.map((tag) => (
              <button
                key={tag}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  border: "1px solid #6d8a4d",
                  backgroundColor: "#fff",
                  color: "#2e7d32",
                  cursor: "pointer"
                }}
                onClick={() => setAnswers({ ...answers, [q.id]: tag })}
              >
                {tag}
              </button>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f5fff8",
        minHeight: "100vh",
        fontFamily: "Varela Round, sans-serif",
        color: "#2e7d32",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem"
      }}
    >
      <div style={{ width: "100%", maxWidth: "500px" }}>
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <h2>{questions[step].text}</h2>
          {renderQuestion()}
        </div>

        <div style={{ height: "10px", backgroundColor: "#ccc", borderRadius: "5px", overflow: "hidden" }}>
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "#81c784",
              height: "100%"
            }}
          ></div>
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          {step < questions.length - 1 ? (
            <button
              onClick={handleNext}
              style={{
                backgroundColor: "#6d8a4d",
                color: "#fff",
                padding: "0.8rem 2rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              הבא
            </button>
          ) : (
            <button
              style={{
                backgroundColor: "#2e7d32",
                color: "#fff",
                padding: "0.8rem 2rem",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
              onClick={() => alert("נמצא לך רעיונות!")}
            >
              מצא לי רעיונות!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questionnaire;
