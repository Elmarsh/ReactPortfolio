import './App.css';
import About from './components/About';
import Banner from './components/Banner'
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
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
      <Portfolio/>
    </div>
  );
}

export default App;
