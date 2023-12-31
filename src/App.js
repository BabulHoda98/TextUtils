// import logo from './logo.svg';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="AboutTextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar text="TextUtils"/>
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze below"/>
        <button className="btn btn-primary">Convert to Uppercase</button>
        <About/>
      </div>
    </>
  );
} 
export default App;
