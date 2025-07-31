




import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from '../components/home/Home'
import Homepage from '../components/home/Homepage'
import ContactForm from '../components/pages/contactform/ContactForm'
import Services from '../components/pages/services/services'
import About from '../components/pages/about/AboutUs'
import TeamProfile from '../components/pages/about/TeamProfile'

const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/services" element={<Services />} />
        
        {/* this is about section and sub section that contains team member details */}
            <Route path="/about" element={<About />} />
             <Route path="/about/:id" element={<TeamProfile />} />
        
    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
