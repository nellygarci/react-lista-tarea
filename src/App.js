import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import ListHomeWorkComponent from './Components/ListHomeWorkComponent';
import HooksComponent from './Components/HooksComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
       
        <HeaderComponent/>
  
       <div className='separador'>
      <HooksComponent/>   
       </div>

      </header>
      

    </div>
  );
}

export default App;
