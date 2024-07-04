import React, { useState } from "react";

const TextUtils = (props) => {
   const [text,setText] = useState("")
   const convertUPclick = ()=>{
    let upper = text.toUpperCase();
    setText(upper)
    props.ShowAlert("Converted to UpperCase..","success")
   }
   const convertLOclick = ()=>{
    let lower = text.toLowerCase();
    setText(lower)
    props.ShowAlert("Converted to LowerCase..","success")
   }
   const Clear = ()=>{
    setText("")
    props.ShowAlert("Text Cleard","success")
   }
   const Copy = ()=>{
    let text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.ShowAlert("Copy All Text","success")
   }
   const space = ()=>{
    let newText = text.split(/[ ]+/);
        setText(newText.join(""))
    props.ShowAlert("Removed Extra Spaces","success")
   }
  return (
    <>
    <div className="container mt-12">
        <h1 className="text-center my-1 text-3xl font-bold">TextUtils</h1>
      <div className="form-group">
        <textarea className="form-control" value={text} onChange={(e)=>setText(e.target.value)} rows="5" id="box"></textarea>
      </div>
      <button className="btn btn-sm btn-primary my-2" disabled={text.length===0} onClick={convertUPclick}>Convert to Upper Case</button>
      <button className="btn btn-sm btn-primary my-2 mx-2" disabled={text.length===0}  onClick={convertLOclick}>Convert to Lower Case</button>
      <button className="btn btn-sm btn-primary my-2 mx-2" disabled={text.length===0}  onClick={Clear}>Clear All Text</button>
      <button className="btn btn-sm btn-primary my-2 mx-2" disabled={text.length===0} onClick={Copy}>Copy</button>
      <button className="btn btn-sm btn-primary my-2 mx-2" disabled={text.length===0} onClick={space}>Remove Extra Space</button>
    </div>
    <div className="container">
        <h1 className="text-3xl font-bold">Text Summary</h1>
        <p className="text-2xl">{text.split(" ").filter((elem)=>{ return elem!=0 }).length} WORD    &    {text.length} CHARACTERS</p>
        <p> {0.008 * text.split(" ").length} Minutes to Read Text</p>
        <h3 className="text-3xl font-bold">Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
};

export default TextUtils;
