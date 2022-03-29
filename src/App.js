
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Projects from './Component/Projects/Projects';
import Skills from './Component/Skills/Skills';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Header from './Component/Header/Header';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>     
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/skills">
          <Skills></Skills>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
