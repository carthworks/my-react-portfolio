import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"
import Aboutus from "./components/aboutus/Aboutus"
import Contactus from "./components/contactus/Contactus"

const App = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <Aboutus/>
            <Contactus/>
            <Footer/>
        </div>
    )
}

export default App
