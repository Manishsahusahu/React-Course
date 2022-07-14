import React, { useState } from 'react';

export default function TextForm(props) {
    let body = document.querySelector('body');
    const [text, setText] = useState('Enter text here', 'success');
    if (props.mode === 'dark') {
        body.style.backgroundColor = '#564141';
        body.style.color = '#d8b2b2';
    }
    else {
        body.style.backgroundColor = '#ffffff';
        body.style.color = 'black';
    }
    const handleOnClick = () => {
        setText(text.toUpperCase());
        props.showAlert('Text is converted to Upper-case!', 'success');
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Text is converted to Lower-case!', 'success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClear = () => {
        setText("");
        props.showAlert('Text is Cleared!', 'warning');
    }
    const handleCopy = (event) => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard','success');
    }
    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ backgroundColor: `${props.mode === 'dark' ? '#564141' : 'white'}`, color: `${props.mode === 'light' ? '#564141' : 'white'}` }} value={text} onChange={handleOnChange} rows="12"></textarea>
                </div>
                <button className='btn btn-primary mx-1 my-2' onClick={handleOnClick}>Convert to Upper-Case</button>
                <button className='btn btn-primary mx-1 my-2' onClick={handleLoClick}>Convert to Lower-Case</button>
                <button className='btn btn-primary mx-1 my-2' onClick={handleClear}>Clear Text</button>
                <button className='btn btn-primary mx-1 my-2' onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>You've entered {text.split(/\s+/).filter((word) => { return word.length !== 0; }).length} words and {text.length} letters.</p>
            </div>
            <div className="container">
                <h3>Preview of text</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: "TextUtils - Convert to UpperCase / LowerCase, Clear Text"
}