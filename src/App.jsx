import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App