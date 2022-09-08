// import logo from './logo.svg';
import './App.css';
import Calculator from './components/state_lifting/state_lifting';
import Clock from './components/lifestyle_and_state/lifestyle_state';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <Clock/>
    </div>
  );
}

export default App;
