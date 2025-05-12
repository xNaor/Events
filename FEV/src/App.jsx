import React from "react";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Varela Round, sans-serif",
        backgroundColor: "#fff4ed",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#4e342e",
        padding: "2rem"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#ff7043" }}>
        🎉 אתר תכנון האירועים שלך באוויר!
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", textAlign: "center" }}>
        עכשיו אפשר להתחיל לעצב, לשלב עמודים, ולהרשים לקוחות 👑
      </p>
    </div>
  );
}
