import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
 
 
 function App() {
   return (
     <div>
       <Navbar/> 
       <Hero/>
       <About/>
       <Services/>
       <Contact/>
       <Footer/>
     </div>
      
   )
 }
 
 export default App