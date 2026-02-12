import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Email from './components/Email'
import Footer from './components/Footer'
import Nav_bar from './components/Nav_bar'
import Home from './pages/Home'
import Create_Account from './components/Create_Account'
import Shop from './pages/Shop'

function App() {
  return (
    <BrowserRouter>
      <Nav_bar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/email" element={<Email />} />
        <Route path="/Create_Account" element={<Create_Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

