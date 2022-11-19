import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick=(props)=>{
    // console.log("Uppercase was clicked"+text);
    let newText= text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleClearClick=(props)=>{
    // console.log("Uppercase was clicked"+text);
    let newText=('');

    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleExtraSpaces=(props)=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.split(/[ ]+/);

    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }
  const handleCopy=(props)=>{
    // console.log("Uppercase was clicked"+text);
    var text=document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to clipboard","success");
    // setText(newText);
  }
  const handleloClick=(props)=>{
    // console.log("Uppercase was clicked"+text);
    let newText= text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }
  
   
  const [text,setText] = useState('Enter text here');
  // text="new text";
  return ( <>
    <div className="container">
      <h1>{props.heading}</h1>
    <div className="mb-3">
  <label htmlFor="myBox" className="form-label" ></label>
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>convert to UPPERCASE</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3">
   <p>{text.split(" ").length} words and {text.length} character</p>
   <p>{0.008* text.split(" ").length} minutes reading time</p>
   <h4>preview</h4>
 <p>{text.length>0?text:"enter something in the textbox to preview"}</p>
    </div>
    </>
  )
}
