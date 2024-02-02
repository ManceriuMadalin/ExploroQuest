import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "./Image";
import contactImage from '../assets/contact.jpg'
import { getContact } from "./GetContact";

export default function Contact() {
     const [fullName, setFullName] = useState('');
     const [emailAddress, setEmailAddress] = useState('');
     const [phoneNumber, setPhoneNumber] = useState('');
     const [message, setMessage] = useState('');

     const handleContact = () => {
          getContact(fullName, emailAddress, phoneNumber, message)

          setFullName("")
          setEmailAddress("")
          setPhoneNumber("")
          setMessage("")
     }

     return (
          <>
               <Navbar />
               <div id="contact">
                    <Image className="contactImg" imgName={contactImage}/>
                    <h2>Send us message</h2>
                    <input
                         className="name input" 
                         type="text" 
                         placeholder="Full Name"
                         value={fullName}
                         onChange={(e) => {setFullName(e.target.value)}}
                    />
                    <input
                         className="email input" 
                         type="email" 
                         placeholder="Email address"
                         value={emailAddress}
                         onChange={(e) => {setEmailAddress(e.target.value)}}
                    />
                    <input 
                         className="number input" 
                         type="text" 
                         placeholder="Phone number"
                         value={phoneNumber}
                         onChange={(e) => {setPhoneNumber(e.target.value)}}
                    />
                    <textarea 
                         rows={3} 
                         className="message"     
                         placeholder="Message"
                         value={message}
                         onChange={(e) => {setMessage(e.target.value)}}
                    ></textarea>
                    <button className="send" onClick={handleContact}>Send</button>
               </div>
               <Footer top={20}/>
          </>
     )
}  