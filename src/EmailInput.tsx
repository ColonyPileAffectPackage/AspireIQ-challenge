import React, { useState } from "react";
import "./EmailInput.css";

export const EmailInput: React.FC = () => {
  const [inputText, setInputText] = useState("");
  return (
    <input
      className="EmailInput"
      onChange={e => setInputText(e.target.value)}
      value={inputText}
    />
  );
};
