import React from "react";
import Header from "./Component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/footer";
import Github from "./Component/Github/Github";
import Contect from "./Component/Contect/Contect";
import About from "./Component/About/About";
function Layout (){
    return (
        <>
        <Header/>
        
        <Outlet/>{/*//ye jha rhega vha change rahega mtlb header or footer ke uder ka bs change hoga header & footer change nhi honge */}
        {/* <About/>
        <Contect/>
        <Github/> */}
        <Footer/>
        
        </>
    )
}

export default Layout