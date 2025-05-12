import React from "react";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        backgroundColor: "#fefaf6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        padding: "2rem"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#e76f51" }}>
        🎉 אתר תכנון האירועים שלך באוויר!
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "600px", textAlign: "center" }}>
        ברוך הבא! זהו שלב הפתיחה של האתר שלך. מכאן נוכל להמשיך לבנות את שאלון ההתאמה,
        אזור הספקים, עמודים אישיים והרבה יותר. שיהיה בהצלחה!
      </p>
    </div>
  );
}
