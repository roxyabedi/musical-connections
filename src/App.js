
import './App.css';
import Header from '../src/components/TItle';
import GameBoard from '../src/components/Board';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
       <GameBoard />
      </header>
    </div>
  );
}

export default App;
