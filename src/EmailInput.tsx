import React, { useState, useRef } from "react";
import "./EmailInput.css";

const makeUniqueIdFactory = () => {
  let counter = 0;

  return () => {
    counter += 1;
    return counter;
  };
};

export const EmailInput: React.FC = () => {
  const getUniqueId = useRef(makeUniqueIdFactory()).current;
  const [inputText, setInputText] = useState("");
  const [addresses, setAddresses] = useState<
    Array<{ address: string; id: number }>
  >([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab" || e.key === "Enter") {
      e.preventDefault();
      setAddresses([...addresses, { address: inputText, id: getUniqueId() }]);
      setInputText("");
    }
  };

  return (
    <div className="EmailInput-container">
      <div className="EmailInput-address-list">
        {addresses.map(({ address, id }) => (
          <span key={id}>{address}</span>
        ))}
      </div>
      <input
        type="text"
        className="EmailInput-input"
        onChange={e => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        value={inputText}
      />
    </div>
  );
};
