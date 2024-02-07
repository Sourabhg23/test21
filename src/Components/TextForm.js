import React, {useState} from "react"



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }  

    const handleLoClick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }   

    const [text, setText] = useState('Enter text here2');
    

    return (
        <>
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowercase</button>
        </div>

       <div className="container my-3">
           <h1>Your text summery</h1>
           <p>{text.split(" ").length}words and {text.length} characters</p>
           <p>{0.008 * text.split(" ").length}Minutes Read</p>
           <h2>Preview</h2>
           <p>{text}</p>

       </div>

       </>
    )
}   