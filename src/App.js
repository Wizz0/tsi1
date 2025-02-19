import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={ <Home />}> </Route>
          <Route path ="/about" element = { <About />}> </Route>
          <Route path ="/contact" element = { <Contact />}> </Route>
        </Routes>

      </BrowserRouter>
      </>
  );
}

export default App;
