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
	const [mode, setMode] = useState('light');
	const toggleMode = () => {
		if (mode === 'light') {
			setMode("dark");
			showAlert('Dark Mode has turned on', 'success');
			document.title = 'TextUtils - Dark Mode';
		}
		else {
			setMode("light");

			document.title = 'TextUtils';
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
				<Alert alert={alert} />
				<div className="container my-3">
					<Routes>
						<Route exact path="/about" element={<About/>}>
						</Route>
						<Route exact path="/users" element={<TextForm mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert} />}>
						</Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
