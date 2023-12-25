import React, {useState} from 'react'



export default function Text(props) {

  const [text,setText] = useState("");
  const convert = () => {
    let textNew = text.toUpperCase();
    setText(textNew)
  }
  const toLowerCase = () => {
    let textNew = text.toLowerCase();
    setText(textNew)
  }
  

  const change = (event)=> {
    setText(event.target.value)
  }

  const WordCount = () => {
    return  text.split(' ').filter((n) => n !== '').length;
  
  }



const handleClear = ()=>{
  setText("");
}
  return (
    <div className='container my-4' style={{color: props.mode ==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h3>Enter the text to analyze below</h3>
        <textarea className="form-control mb-4" style={{backgroundColor: props.mode ==='dark'?'gray':'white',
        color: props.mode ==='dark'?'white':'black'}} value={text} onChange={change} id="text" rows="8" placeholder='Enter your text'></textarea>
        <button className='btn btn-primary mx-1' onClick={convert}>Covert to UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={toLowerCase}>Covert to LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
      </div>
      <div>
        <h2>Summary about text</h2>
        <p>{WordCount} <b>words</b> {text.replace(/[^a-z]/gi, "").length} <b>characters</b> {text.replace(/[^0-9]/gi, "").length} <b>alphabets</b></p>
        <p>Result: {text.length===0? "No text":text}</p>
      </div>
    </div>
  )
}



