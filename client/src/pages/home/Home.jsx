import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import FeaturedLocations from "../../components/featuredLocations/FeaturedLocations";
import PropertyList from "../../components/propertyList/PropertyList";
import MailList from "../../components/mailList/MailList";
import Footer from "../../footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className = "homeContainer">
                <h1 className = "homeTitle"> Locations </h1>
                <FeaturedLocations/>
                <h1 className = "homeTitle"> Resources </h1>
                <PropertyList/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;