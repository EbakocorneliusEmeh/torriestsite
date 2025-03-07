import './App.css'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Tourpackagepage from './pages/Tourpackagepage'
import Gallerypage from './pages/Gallerypage'
import Blogpage from './pages/Blogpage'
import Contactuspage from './pages/Contactuspage'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/package"element={<Tourpackagepage/>} />
          <Route path="/gallery" element={<Gallerypage />} />
          <Route path="/" element={<Blogpage />} />
          <Route path="/contact" element={< Contactuspage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
