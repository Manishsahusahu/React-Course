import React,{useState} from 'react';

export default function TextForm(props) {
    const handleOnClick=()=>{
        console.log("Uppercase was clicked");
        setText("Congratulations! Text is Changed.");
    }
    const handleOnChange=(event)=>{
        console.log("onChange was clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="12"></textarea>
            </div>
                <button className='btn btn-primary' onClick={handleOnClick}>Convert to Upper-Case</button>
        </>
    )
}
