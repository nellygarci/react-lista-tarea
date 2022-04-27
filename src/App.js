import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import ListHomeWorkComponent from './Components/ListHomeWorkComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
       
        <HeaderComponent/>
       <ListHomeWorkComponent/>
       <div className='separador'>

       </div>

      </header>
      

    </div>
  );
}

export default App;
