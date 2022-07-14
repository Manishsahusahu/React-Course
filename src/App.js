import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

function App() {
	// const removeTheme=()=>{
	// 	document.body.classList.remove('bg-danger');
	// 	document.body.classList.remove('bg-primary');
	// 	document.body.classList.remove('bg-warning');
	// 	document.body.classList.remove('bg-success');
	// 	document.body.classList.remove('bg-light');
	// }
	const [mode, setMode] = useState('light');
	const toggleMode = (colorClass) => {
		// removeTheme();
		// document.body.classList.add('bg-'+colorClass);
		if (mode === 'light') {
			setMode("dark");
			showAlert('Dark Mode has turned on', 'success');
		}
		else {
			setMode("light");
		}
	}
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	}
	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<div style={{height:'50px'}}>
					<Alert alert={alert} />
				</div>
				<div className="container my-3">
					<Routes>
						<Route exact path="/about" element={<About mode={mode} />}>
						</Route>
						<Route exact path="/users" element={<TextForm mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert} />}>
						</Route>
					</Routes>
					{/* <TextForm mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert} /> */}
				</div>
			</Router>
		</>
	);
}

export default App;
