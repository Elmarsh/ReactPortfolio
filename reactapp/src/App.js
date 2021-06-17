import './App.css';
import About from './components/About';
import Banner from './components/Banner'
import Nav from './components/Nav';
import Prices from './components/Prices';
import Services from './components/Services';
import Skills from './components/Skills';







function App() {
  return (
    <div className="App">
      <Banner/>
      <Nav/>
      <Services/>
      <About/>
      <Skills/>
      <Prices/>
    </div>
  );
}

export default App;
