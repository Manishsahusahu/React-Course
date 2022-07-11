import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const toggleMode=()=>{

}
function App() {
	return (
		<>
			<Navbar title="TextUtils"/>
			<div className="container my-3">
				<TextForm heading="Enter the text here to analyze" />
			{/* <About/> */}
			</div>
		</>
	);
}

export default App;
