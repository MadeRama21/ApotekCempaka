import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profil from "./pages/Profil";
import Produk from "./pages/Produk";
import Kontak from "./pages/Kontak";
import Apotek from "./pages/apotek";
import Add_obat from "./pages/add_obat";
import EditObat from "./pages/edit_user";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profil" element={<Profil/>}/>
          <Route path="/produk" element={<Produk/>}/>
          <Route path="/apotek" element={<Apotek/>}/>
          <Route path="/apotek/add_obat" element={<Add_obat/>}/>
          <Route path="/apotek/edit/:kodeObat" element={<EditObat/>}/>
          <Route path="/kontak" element={<Kontak/>}/>
        </Routes>
    </Router>
  );
}

export default App;