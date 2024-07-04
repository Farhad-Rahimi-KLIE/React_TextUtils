import React, { useState } from "react";
import TextUtils from "./Components/TextUtils";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";

function App() {
const [mode,setMode] = useState("dark");
const [alert,setalert] = useState(null);
const ShowAlert = (message,type)=>{
  setalert({
    message : message,
    type : type,
  })
}
const removeAllColors = ()=>{
  document.body.classList.remove("bg-light");
  document.body.classList.remove("bg-dark");
  document.body.classList.remove("bg-primary");
  document.body.classList.remove("bg-warning");
  document.body.classList.remove("bg-success");
  document.body.classList.remove("bg-danger");
}
 const EnableMode = (cls)=>{
  removeAllColors()
  document.body.classList.add("bg-" + cls)
  if (mode==="light") {
    setMode("dark");
    ShowAlert("Enable Dark Mode","success")
    document.body.style.backgroundColor = "grey";
    // setTimeout(() => {
    //   document.title = "Hello Mister Klie"
    // }, 1000);
  }else{
    setMode("light")
    ShowAlert("Enable light Mode","success");
    document.body.style.backgroundColor = "white";
  }
 }
  return (
    <>
    <Navbar logo="TextUtils" link="Home" about="About Us" contact="Contact Us" EnableMode={EnableMode} mode={mode}/>
    <Alert alert={alert} ShowAlert={ShowAlert}/>
    {/* <Alert/> */}
    <TextUtils ShowAlert={ShowAlert}/>
    </>
  );
}

export default App;
