import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Navbar from './shared/Navbar';
import Blogs from './Pages/Blogs';

function App() {
  return (
    <div >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
