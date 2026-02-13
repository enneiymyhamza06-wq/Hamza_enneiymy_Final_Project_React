import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Email from './components/Email'
import Footer from './components/Footer'
import Nav_bar from './components/Nav_bar'
import Home from './pages/Home'
import Create_Account from './components/Create_Account'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import  Contact from './pages/Contact'
import About from './pages/About'
import Email_bohdo from './components/Email_bohdo'
import Sale from './pages/Sale'
import Features from './pages/ Features'
import Products from './components/Prodact'
import Img_details from './components/Img_details'
import Our_Blog_details from './components/Our_Blog_details'
import { Error } from './pages/error'



function App() {

  return (
    <BrowserRouter>
     
    <Nav_bar />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="Features" element={<Features />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/email" element={<Email />} />
        <Route path="/Create_Account" element={<Create_Account />} />
        <Route path="/Email_bohdo" element={<Email_bohdo />} />
        <Route path="/Img_details" element={<Img_details />} />
        <Route path="/detailsOur" element={<detailsOur />} />
        <Route path="/Our_Blog_details/:id" element={<Our_Blog_details />} />
      </Routes>

{/* <Our_Blog_details/> */}

     <Footer  />

    </BrowserRouter>
  )
}

export default App

