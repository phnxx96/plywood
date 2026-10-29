import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Navbar from "./components/Navbar/Navbar";
import MicaCollection from "./Pages/MicaCollection";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Catalogue from "./Pages/Catalogue";
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