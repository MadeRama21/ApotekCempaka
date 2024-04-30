import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profil from "./pages/Profil";
import Produk from "./pages/Produk";
import Kontak from "./pages/Kontak";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profil" element={<Profil/>}/>
          <Route path="/produk" element={<Produk/>}/>
          <Route path="/kontak" element={<Kontak/>}/>
        </Routes>
    </Router>
  );
}

export default App;