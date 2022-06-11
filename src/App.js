import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './shared/Navbar';
import Blogs from './Pages/Blogs';
import Carhub from './Projects/Carhub';
import Gainz from './Projects/Gainz';
import Stockz from './Projects/Stockz';
import AxnGaming from './Projects/AxnGaming';

function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="carhub" element={<Carhub />} />
        <Route path="gainz" element={<Gainz />} />
        <Route path="stockz" element={<Stockz />} />
        <Route path="axn" element={<AxnGaming />} />
      </Routes>
    </div>
  );
}

export default App;
