import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import travelImage from '../assets/travel.jpg'
import { BiCompass, BiGlobe, BiCalendar } from 'react-icons/bi';

export default function Home() {
     return (
          <>
               <Navbar />
               <div className="container">
                    <h1>Enjoy your trip</h1>
                    <p>Discover new places that you might like with us. Based on your answers to the following questions, we will
                         make the best recommendation related to the place where
                         you should spend your vacation. <a>Take our test</a></p>
                    <span id="btns">
                         <a href="/about"><button type="button" className="about">About Us</button></a>
                         <a href="/contact"><button type="button" className="contact">Contact Us</button></a>
                    </span>
                    <img className="homeImg" src={travelImage} />
                    <h1>Why You Should Get Our Test?</h1>
                    <div className="my-container">
                         <div className="my-column">
                              <BiCompass size={50} className="infoIcon"/>
                              <h2 className="title">Personalized Discovery</h2>
                              <p className="text">Take our test for a personalized journey that aligns with your unique passions and interests. By carefully answering our questions, you'll receive a tailored recommendation that ensures your travel experience is not only enjoyable but intimately connected to what you love most about exploring new places.</p>
                         </div>
                         <div className="my-column">
                              <BiGlobe size={50} className="infoIcon"/>
                              <h2 className="title">Authentic Travel</h2>
                              <p className="text">Uncover hidden gems and authentic destinations with our tailored recommendations. Your test results will guide you to places off the beaten path, offering a truly authentic travel experience. Whether you're seeking cultural immersion, adventure, or tranquility, our test ensures your travel aligns perfectly with your preferences.</p>
                         </div>
                         <div className="my-column">
                              <BiCalendar size={50} className="infoIcon"/>
                              <h2 className="title">Efficient Planning</h2>
                              <p className="text">Our test isn't just a source of inspiration; it's a practical tool for efficient travel planning. Save time and make informed decisions as you receive a personalized guide to create a memorable and unique vacation. Let our test be your compass, steering you towards a travel experience that resonates with your individual tastes and desires.</p>
                         </div>
                    </div>
               </div>
               <Footer top={5}/>
          </>
     )
}