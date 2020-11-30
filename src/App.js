import "./App.css";
import Weather from "./Weather.js";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="Pontevedra" />
          <footer>
            Open Source-Code by{" "}
            <a href="" target="_blank" rel="noreferrer">
              Gemma Sorce
            </a>
          </footer>
        </header>
      </div>
    </div>
  );
}
