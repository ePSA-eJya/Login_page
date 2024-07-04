import React from "react";

// used  in Input.js
//toggle icons
export default function Visibility({
  visible,
  toggleVisibility,
  buttonOn,
  buttonOff,
}) {
  return (
    <>
      {/* <span class="material-symbols-outlined">keyboard</span> */}
      <button type="button" onClick={toggleVisibility}>
        {visible ? (
          <span className="material-symbols-outlined">{buttonOff}</span>
        ) : (
          <span className="material-symbols-outlined">{buttonOn}</span>
        )}
      </button>
    </>
  );
}
