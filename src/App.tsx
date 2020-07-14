import React, { useState } from "react";
import figmaBackground from "./figma-background.png";
import "./App.css";
import EmailInput from "./EmailInput";

function App() {
  const [addresses, setAddresses] = useState<
    Array<{ address: string; id: number }>
  >([]);

  return (
    <div className="App">
      <div className="App-demo-container">
        <img
          src={figmaBackground}
          className="App-background"
          alt="background"
        />
        <div className="App-input-container">
          <EmailInput addresses={addresses} setAddresses={setAddresses} />
        </div>
      </div>
    </div>
  );
}

export default App;
