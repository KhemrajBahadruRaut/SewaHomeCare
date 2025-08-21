




import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from '../components/home/Home'
import Homepage from '../components/home/Homepage'
// import ContactForm from '../components/pages/contactform/ContactForm'
// import Services from '../components/pages/services/services'
// import About from '../components/pages/about/AboutUs'
import TeamProfile from '../components/pages/about/TeamProfile'
// import Banners from '../components/pages/banners/Banners'
import MainJoinsection from '../components/pages/whyjoinus/MainJoinsection'
// import CareSection from '../components/pages/about/care/Caresection'
import MainHomePage from '../components/home/MainHomePage'
import Test from '../components/layouts/test'
const MyRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Homepage/>} />
        <Route path="/" element={<MainHomePage/>} />
          {/* <Route path="/contact" element={<ContactForm />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        
        {/* this is about section and sub section that contains team member details */}

             <Route path="/:id" element={<TeamProfile />} />

        <Route path='/join-us' element={<MainJoinsection/>}/>
        {/* <Route path='/care' element={<CareSection/>}/> */}
        <Route path='/test' element={<Test/>}/>



    </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
