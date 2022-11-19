import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{useState} from 'react'
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// }from "react-router-dom";

 
// let name="kesh";
function App() {
 const [mode,setMode] = useState('light');
 const [alert,setAlert] = useState(null);
 const showAlert = (message,type)=>{
  setAlert(
    {
      msg:message,
      type:type
    }
  )
  setTimeout(()=>{
    setAlert(null)
    
  },2000);
 }
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgoundColor='white';
    showAlert("Light mode has been enabled","success");
  }
 }

 return ( <>
    {/* <Router> */}
    <Navbar title="bol kya chahiye tereko" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
  {/* <Switch> */}
    {/* <Route path="/about"> */}
      {/* <About/> */}
    {/* </Route> */}
{/* <Route path="/"> */}
    <Textform heading="enter the text" mode={mode}/>
{/* </Route> */}
  {/* </Switch> */}
    </div>
    {/* </Router>   */}
    </> 
  );
}
export default App;
  

  

