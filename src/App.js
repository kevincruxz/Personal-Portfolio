import logo from './logo.svg';
import './App.css';
import Frontpage from './Components/Frontpage';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Abilities } from './Components/Abilities';

function App() {
  return (
    <div className="App">
      <Frontpage />
      <About />
      <Projects />
      <Abilities />
    </div>
  );
}

export default App;
