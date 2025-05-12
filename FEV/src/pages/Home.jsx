
import React from "react";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Varela Round, sans-serif",
        backgroundColor: "#fefcf9",
        minHeight: "100vh",
        padding: "0",
        margin: "0",
        color: "#3e3e3e",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          padding: "2rem"
        }}
      >
        <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem", textShadow: "2px 2px 8px #444" }}>
          האירוע שלך. הרעיון שלנו. בחינם.
        </h1>
        <button
          style={{
            fontSize: "1.2rem",
            padding: "0.8rem 2rem",
            backgroundColor: "#6d8a4d",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          נתחיל לתכנן את זה
        </button>
      </section>

      {/* Features */}
      <section style={{ display: "flex", justifyContent: "space-around", padding: "3rem 1rem", backgroundColor: "#f5fff8" }}>
        {[
          { icon: "💸", text: "ללא עלות" },
          { icon: "🎯", text: "מותאם אישית" },
          { icon: "⏱️", text: "עד 3 דקות לתוצאה" },
        ].map((item, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem" }}>{item.icon}</div>
            <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>{item.text}</p>
          </div>
        ))}
      </section>

      {/* Logos Row */}
      <section style={{ textAlign: "center", padding: "1rem", backgroundColor: "#fff" }}>
        <p style={{ fontSize: "0.9rem", color: "#888" }}>השתמשו בנו:</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "1rem" }}>
          <img src="https://upload.wikimedia.org/wikipedia/he/thumb/b/b0/Mitchatnim.png/250px-Mitchatnim.png" alt="Mitchatnim" height="30" />
          <img src="https://eventing.co.il/wp-content/uploads/2020/06/logo-eventing.png" alt="Eventing" height="30" />
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "3rem 1rem", backgroundColor: "#fcf8f3", textAlign: "center" }}>
        <h2 style={{ color: "#5d4037" }}>מה אומרים עלינו</h2>
        <video width="320" height="180" controls style={{ marginTop: "1rem", borderRadius: "8px" }}>
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#555" }}>
          “מצאתי את הספקים המושלמים תוך דקות – ואפילו לא שילמתי שקל.”
        </p>
      </section>
    </div>
  );
}

export default Home;
