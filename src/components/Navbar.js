import React,{useState} from 'react';
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const [mode, setMode] = useState('light');
    const toggleMode=()=>{
        if(mode==='light')setMode("dark");
        else setMode("light");
    }
    return (
        <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <div class="form-check form-switch">
                            <input class="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class={`form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"> {`${mode === 'dark' ? "Disable" : "Enable"} Dark Mode`}</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}


Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Title is here",
    aboutText: "About"
}