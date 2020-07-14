import React, { useState, useRef } from "react";
import "./EmailInput.css";

const makeUniqueIdFactory = () => {
  let counter = 0;

  return () => {
    counter += 1;
    return counter;
  };
};

const validEmailRegex = /^[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

const EmailAddress: React.FC<{
  address: string;
  onRemove: () => void;
}> = ({ address, onRemove }) => {
  const isValid = validEmailRegex.test(address);

  return (
    <div
      className={`EmailInput-address${
        isValid ? "" : " EmailInput-address-invalid"
      }`}
    >
      <span className="EmailInput-address-span">{address}</span>
      {!isValid && <div className="EmailInput-address-error">!</div>}
      <div className="EmailInput-remove-button" onClick={onRemove}>
        ✕
      </div>
    </div>
  );
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
      if (inputText.length > 0) {
        setAddresses([...addresses, { address: inputText, id: getUniqueId() }]);
        setInputText("");
      }
    }
  };

  const handleRemove = (index: number) => {
    setAddresses([
      ...addresses.slice(0, index),
      ...addresses.slice(index + 1, addresses.length)
    ]);
    // TODO: focus input?
  };

  return (
    <div className="EmailInput-container">
      <div className="EmailInput-address-list">
        {addresses.map(({ address, id }, index) => (
          <EmailAddress
            key={id}
            address={address}
            onRemove={() => handleRemove(index)}
          />
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
