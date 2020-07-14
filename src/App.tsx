import React from "react";
import figmaBackground from "./figma-background.png";
import "./App.css";
import { EmailInput } from "./EmailInput";

function App() {
  return (
    <div className="App">
      <div className="App-demo-container">
        <img
          src={figmaBackground}
          className="App-background"
          alt="background"
        />
        <div className="App-input-container">
          <EmailInput />
        </div>
      </div>
    </div>
  );
}

export default App;
