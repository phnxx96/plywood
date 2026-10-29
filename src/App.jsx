import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import MicaCollection from "./pages/MicaCollection";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Catalogue from "./pages/Catalogue";
import Footer from "./components/Footer/Footer";
import ScrollToHash from "./components/ScrollToHash";
function App() {
  return (
   <BrowserRouter>

  <ScrollToHash />

  <Navbar />

  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/catalogue" element={<Catalogue />} />
   <Route
  path="/products/mica"
  element={<MicaCollection />}
/>
  </Routes>

  <Footer />

</BrowserRouter>
  );
}

export default App;