import React from 'react';
import Header from '../../components/Header/Header.component';
import Iphone from "../../components/Iphone/Iphone.component";
import Benefits from "../../components/Benefits/Benefits.component";
import MacBook from "../../components/MacBook/MacBook.component";
import Pricing from "../../components/Pricing/Pricing.component";
import Footer from '../../components/Footer/Footer.component';


const HomePage =()=>{
    return (
        <>
            <Header/>
           <Iphone/>
           <Benefits/>
           <MacBook/>
           <Pricing/>
           <Footer/>
        </>
    )
};

export default  HomePage;
