import React,{useState} from 'react';

export default function TextForm(props) {
    const handleOnClick=()=>{
        setText(text.toUpperCase());
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="12"></textarea>
                </div>
                    <button className='btn btn-primary mx-1' onClick={handleOnClick}>Convert to Upper-Case</button>
                    <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lower-Case</button>
            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>You've entered {text.split(" ").length} words and {text.length} letters.</p>
            </div>
            <div className="container">
                <h3>Preview of text</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
