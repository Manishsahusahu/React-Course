import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="/">{props.title}</a> */}
                <Link className="navbar-brand" to="/users">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            <Link className="nav-link" aria-current="page" to="/users">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            {/* <a className="nav-link" href="/">{props.aboutText}</a> */}
                        </li>
                    </ul>
                    {/* <div className="d-flex">
                        <div className="bg-primary mx-2" style={{width:'20px', height:'20px', cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}}></div>
                        <div className="bg-danger mx-2" style={{width:'20px', height:'20px', cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}}></div>
                        <div className="bg-warning mx-2" style={{width:'20px', height:'20px', cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}}></div>
                        <div className="bg-success mx-2" style={{width:'20px', height:'20px', cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}}></div>
                        <div className="bg-light mx-2" style={{width:'20px', height:'20px', cursor:'pointer'}} onClick={()=>{props.toggleMode('light')}}></div>
                    </div> */}
                    <form className="d-flex" role="search">
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault"> {`${props.mode === 'dark' ? "Disable" : "Enable"} Dark Mode`}</label>
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
};

Navbar.defaultProps = {
    title: "Title is here",
    aboutText: "About"
};