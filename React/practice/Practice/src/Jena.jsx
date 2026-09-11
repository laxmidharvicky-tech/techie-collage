import { useState, useEffect } from "react";

function Jena() {
  const [joke, setJoke] = useState({});
  async function generatejokes() {
    const data = await fetch(
      "https://raw.githubusercontent.com/15Dkatz/official_joke_api/refs/heads/master/jokes/index.json",
    );
    const jsonData = await data.json();
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    setJoke(jsonData[randomIndex]);
    }
 
  useEffect(() => {
      generatejokes();
      
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        background: "linear-gradiant(135deg, #e8f5f1 ,#f8faf9)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "650px",
          bacgroundColor: "white",
          padding: "40px",
          borderRadious: "24px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontSize: "50px", marginBottom: "10px" }}>🤣</div>
        <h1
          style={{ fontSize: "34px", color: "#015844", marginBottom: "30px" }}
        >
          Joke Generator
        </h1>
        <div
          style={{
            bacgroundColor: "#f4faf8",
            borderRadious: "18px",
            padding: "25px",
            textAlign: "left",
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              dontWeight: "bold",
              color: "#6b7280",
            
              letterSpacing: "1px",
            }}
          >
            setup:{joke.setup}
          </h1>{" "}
          <br></br>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#6b7280",
              
            }}
          >
            {" "}
            punchline :{joke.punchline}
          </p>
        </div>
        <button
          onClick={generatejokes}
          style={{
            width: "100%",
            marginTop: "28px",
            padding: "15px",
            border: "none",
            borderRadius: "12px",
           backgroundColor: "green",
            color: "white",
            fontSize: "17px",
            fontWeight: "600",
              cursor: "pointer",
         
          }}
        >
          Generate Jokes
        </button>
      </div>
    </div>
  );
}
export default Jena;
