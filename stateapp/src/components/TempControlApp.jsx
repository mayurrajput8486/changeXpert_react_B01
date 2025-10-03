import React, { useState } from "react";

const TempControlApp = () => {
  const [temperature, setTemperature] = useState(20); // default temp

  // Determine background, emoji, and message
  let bgColor = "";
  let message = "";
  let emoji = "";

  if (temperature > 30) {
    bgColor = "#ff4d4d"; // red
    message = "It's too hot";
    emoji = "🥵";
  } else if (temperature < 10) {
    bgColor = "#4da6ff"; // blue
    message = "It's too cold";
    emoji = "🥶";
  } else {
    bgColor = "#4dff88"; // green
    message = "Perfect weather";
    emoji = "😊";
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          color: "#333",
          width: "350px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {/* Temperature Circle */}
        <div
          style={{
            background: bgColor,
            borderRadius: "50%",
            width: "180px",
            height: "180px",
            margin: "0 auto 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
            boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            transition: "background 0.5s ease, transform 0.3s ease",
            transform: `scale(${1 + Math.abs(temperature - 20) * 0.01})`,
          }}
        >
          <span style={{ fontSize: "2.5rem" }}>{temperature}°C</span>
          <span style={{ fontSize: "2.5rem" }}>{emoji}</span>
        </div>

        {/* Message */}
        <p style={{ fontSize: "1.3rem", fontWeight: "bold", marginBottom: "20px" }}>
          {message}
        </p>

        {/* Buttons */}
        <div>
          <button
            onClick={() => setTemperature(temperature - 1)}
            style={buttonStyle}
          >
            -
          </button>
          <button
            onClick={() => setTemperature(temperature + 1)}
            style={buttonStyle}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

// Reusable button style
const buttonStyle = {
  padding: "12px 24px",
  margin: "0 12px",
  border: "none",
  borderRadius: "50%",
  background: "#333",
  color: "#fff",
  fontSize: "1.2rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.2s ease",
};

export default TempControlApp;
