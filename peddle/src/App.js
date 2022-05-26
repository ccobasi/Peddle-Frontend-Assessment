import './App.css';
// import {  Routes,Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact'
import FetchAPI from './components/Github';


function App() {
  return (
      <>
      <div className="App">
        
        <Routes>
          <Route path="/comingsoon" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/blog" element={<Blog />}/>
          <Route exact path="/api" element={<FetchAPI/>}/>
            
          
        </Routes>
      </div>
    </>
  );
}

export default App;
