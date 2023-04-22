import logo from './logo.svg';
import './App.css';
import Frontpage from './Components/Frontpage';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Abilities } from './Components/Abilities';
import { Form } from './Components/Form';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Frontpage />
      <About />
      <Projects />
      <Abilities />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
