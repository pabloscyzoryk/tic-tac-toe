// styles
import './App.css';

// component imports
import Board from './components/Board'
import Title from './components/Title'

function App() {
    return (
      <div className="App">
          <Title title="Tic Tac Toe"/>
          <Board />
          <p className="author" onClick={() => window.open('https://github.com/pabloscyzoryk')}> &copy; by Paweł Cyrzyk 2022</p>
      </div>
    );
}

export default App;
