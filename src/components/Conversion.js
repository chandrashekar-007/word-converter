// project 1 - Conversion of letters
import React, {useState} from "react";
import propTypes from "prop-types";
 
export default function Conversion(props) {
    const [text,setText] = useState("");

    const textOnChange = (event) =>{
        setText(event.target.value);
    }
    const btnOnClick1 = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("success","Converted into uppercase")
        
      }
      const btnOnClick2 = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("success","Converted into lowercase")
      }
      const btnOnClick3 = ()=>{
        let arr = text.split(" ");
        for(var i=0;i<arr.length;i++){
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText = arr.join(" ");
        setText(newText)
        props.showAlert("success","Capitalized each word")
      }
      const btnOnClick4 = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("success","All text cleared successfully")
      }
      
      const btnOnClick5 = ()=>{
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        alert("Text copied");
      }
      const btnOnClick6 = ()=>{
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText)
        props.showAlert("success","Successfully removed extra spaces")
    }
  return (
    <>
    <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
      <h2 className="mt-5">{props.title1}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"  placeholder={props.title2} value={text} onChange={textOnChange}
        >
        </textarea>
      </div>
      <div className="mt-3 d-grid gap-3 d-md-flex ">
        <button disabled={text.length === 0} className="btn btn-primary my-3" onClick={btnOnClick1}>{props.button1}</button>
        <button disabled={text.length === 0} className="btn btn-success my-3" onClick={btnOnClick2}>{props.button2}</button>
        <button disabled={text.length === 0} className="btn btn-info my-3" onClick={btnOnClick3}>{props.button3}</button>
        <button disabled={text.length === 0} className="btn btn-secondary my-3" onClick={btnOnClick4}>{props.button4}</button>
        <button disabled={text.length === 0} className="btn btn-secondary my-3" onClick={btnOnClick5}>{props.button5}</button>
        <button disabled={text.length === 0} className="btn btn-warning my-3" onClick={btnOnClick6}>{props.button6}</button>
      </div> 
      <div className="container">
        <h2 className="mt-3">{props.summary}</h2>
        <p>{text.split(/\s+/).filter((t)=>t !== "").length} Words and {text.length} Characters</p>
        <p>Estimated reading time is :- <b>{.008*text.split(" ").filter((t)=>t !== "").length} minutes </b></p>
      </div> 
      <div className="container mt-3">
        <h2 className="mb-3">{props.preview}</h2>
        <p>{`${text.length>0?text:"Type your text to preview"}`}</p>
      </div>
      </div>
    </>
  );
}

Conversion.defaultProps = {
  title1: "Conversion of Letters",
  title2: "Enter your text here",
  button1: "Upper case text",
  button2: "Lower case text",
  button3: "Capitalize each word",
  button4: "Clear text",
  button5: "Copy text",
  button6: "Remove extra spaces",
  summary: "Your Text Summary",
  preview: "Preview of your text"
};

Conversion.propTypes = {
  title1: propTypes.string.isRequired,
  title2: propTypes.string.isRequired,
  button: propTypes.string.isRequired,
};
