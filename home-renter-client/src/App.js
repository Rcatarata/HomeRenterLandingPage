import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Popular from './components/Popular';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Popular />
    </div>
  );
}

export default App;
