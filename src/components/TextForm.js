import React, {useState} from 'react'

export default function TextForm(props){
  const handleUpClick=()=>{
    console.log("Uppercase was clicked: " +text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleClerClick=()=>{
    let newText="";
    setText(newText)
  }
  const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  // //Babul Hoda
  // const handleCopyClick=()=>{
  //   let newText=text.copy();
  //   setText(newText);
  // }
//Credits
const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}
//Credit A
const handleCopy=()=>{
  let text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}



  const [text,setText]=useState('Enter text here2');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1> 
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClerClick}>Clear text</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Text Copy</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
    <div className='container my-3'>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} word and {text.length} character</p>
      <p>{0.008 * text.split(" ").length}Minute read</p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}

