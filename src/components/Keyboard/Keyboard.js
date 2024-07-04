import React, { useState } from "react";
import Input from "../Input/Input";
import Keys from "./Keys";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Button";
// import Jsonfile from "../Jsonfile.js/Jsonfile";

export default function Keyboard() {
  const [usernameText, setUserNameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [currentInput, setCurrentInput] = useState("username");
  const [showPassword, setShowPassword] = useState(true);
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [capsLock, setCapsLock] = useState(true);

  const handleClick = (event) => {
    const value = event.target.innerText;
    if (value === "←") {
      if (currentInput === "username") {
        const newText = usernameText.slice(0, -1);
        setUserNameText(newText);
      } else {
        const newText = passwordText.slice(0, -1);
        setPasswordText(newText);
      }
    } else if (value === "⇪") {
      setCapsLock(!capsLock);
    } else {
      if (currentInput === "username")
        setUserNameText(
          usernameText + (capsLock ? value : value.toLowerCase())
        );
      else {
        setPasswordText(passwordText + value);
        if (isNaN(parseInt(value, 10)))
          toast.error("Password can only contain numbers");
      }
    }
  };

  const handleSubmit = async () => {
    toast.dismiss();
    if ((usernameText !== "") & (passwordText !== "")) {
      console.log({ usernameText });
      //https://medium.com/@Evelyn.Taylor/javascript-how-to-check-if-a-key-exists-in-an-object-cb918935236f
      // console.log(usernameText);
      // async function loadNames() {
      const response = await fetch("http://localhost:3000/users");
      const names = await response.json();

      const currentUser = names.find(
        ({ username }) => username === usernameText
      );
      if (currentUser?.password === passwordText) {
        toast.success("Login successful");
      } else {
        toast.error("Invalid credentials.Try again!"); // show invalid credentials
      }
      // }
      // await loadNames();
      setUserNameText("");
      setPasswordText("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleKeyboardVisibility = () => {
    setShowKeyboard(!showKeyboard);
  };

  return (
    <>
      <Input
        input={"username"}
        buttonTexts={usernameText}
        setCurrentInput={setCurrentInput}
        setButtonTexts={setUserNameText}
      />

      <Input
        input={"password"}
        buttonTexts={passwordText}
        setCurrentInput={setCurrentInput}
        setButtonTexts={setPasswordText}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />

      <Keys
        className="keys"
        handleClick={handleClick}
        toggleKeyboardVisibility={toggleKeyboardVisibility}
        showKeyboard={showKeyboard}
        capsLock={capsLock}
      />
      <Button
        className="submit"
        buttonType={"submit"}
        handleSubmit={handleSubmit}
        disabled={usernameText === "" || passwordText === ""}
      />
      {/* <Jsonfile usernameText={usernameText} />; */}
    </>
  );
}
