// import logo from './logo.svg';
import './App.css';
import Calculator from './components/state_lifting/state_lifting';
import Clock from './components/lifestyle_and_state/lifestyle_state';
import Example from './components/hooks/hooks_glance';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <Clock/>

      <h1>Intro To Hooks</h1>
      <h2>State Hooks</h2>
      <Example/>
    </div>
  );
}

export default App;
