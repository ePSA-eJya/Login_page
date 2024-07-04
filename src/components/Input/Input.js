import Visibility from "../Visibility/Visibility";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = ({
  input,
  buttonTexts,
  setCurrentInput,
  setButtonTexts,
  showPassword,
  togglePasswordVisibility,
}) => {
  const handleOnClick = () => {
    setCurrentInput(input);
  };

  function type_both_keyboard(buttonTexts, x, input) {
    toast.dismiss();
    if (input === "username") return x;
    if (x.length < buttonTexts.length) return buttonTexts.slice(0, -1);
    let value = buttonTexts;
    let z = x[buttonTexts.length]; //for backspace issue
    // console.log(typeof z);
    if (isNaN(parseInt(z, 10)))
      toast.error("Password can only contain numbers");
    return value + z;
    // return value;
  }

  return (
    <>
      <div className="input">
        {input} :
        <input
          id={input}
          name={input}
          style={{
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",

            marginLeft: "6px",
            width: "63%",

            border: "2px solid #708090",
            borderRadius: "0.5rem",
            outline: "0px",

            "&:hover": {
              border: "2px solid green",
            },
          }}
          onFocus={handleOnClick}
          type={
            input === "username" ? "text" : showPassword ? "text" : "password"
          }
          value={buttonTexts}
          // value={input === "username" ? buttonTexts : f(buttonTexts)}
          onChange={(e) => {
            setButtonTexts(
              type_both_keyboard(buttonTexts, e.target.value, input)
            );
          }}
        ></input>
      </div>
      {input === "password" ? (
        <Visibility
          visible={showPassword}
          toggleVisibility={togglePasswordVisibility}
          type={" password"}
          buttonOn="visibility"
          buttonOff="visibility_off"
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Input;
