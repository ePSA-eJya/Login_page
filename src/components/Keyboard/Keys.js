import React from "react";
import Visibility from "../Visibility/Visibility";

export default function Keys({
  handleClick,
  showKeyboard,
  toggleKeyboardVisibility,
  capsLock,
}) {
  const numbers = Array.from({ length: 10 }, (_, index) => index.toString());
  const r1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const r2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const r3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const renderButtons = (array) =>
    array.map((char, index) => (
      <button key={index} onClick={handleClick}>
        {capsLock ? char : char.toLowerCase()}
      </button>
    ));

  return (
    <>
      <Visibility
        visible={showKeyboard}
        toggleVisibility={toggleKeyboardVisibility}
        type={" keyboard"}
        buttonOn="Keyboard"
        buttonOff="Keyboard_hide"
      />
      {showKeyboard && (
        <div className="keys">
          <div className="row">{renderButtons(numbers)}</div>
          <div className="row">{renderButtons(r1)}</div>
          <div className="row">{renderButtons(r2)}</div>
          <div className="row">
            {renderButtons(r3)}
            <button key="backspace" onClick={handleClick}>
              ←
            </button>
            <button key="capslock" onClick={handleClick}>
              ⇪
            </button>
          </div>
        </div>
      )}
    </>
  );
}
