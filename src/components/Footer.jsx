import React from "react";

export default function Footer(props) {
     return (
          <footer style={{"marginTop": `${props.top}vh`}}>
               <span className="spanFooter">
               <div className="footerSettings">
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="45"
                         height="45"
                         fill="currentColor"
                         className="bi bi-backpack"
                         viewBox="0 0 16 16"
                    >
                         <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14ZM4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4Zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10H5Z" />
                         <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6.002 6.002 0 0 1 4-5.659ZM7 2v.083a6.04 6.04 0 0 1 2 0V2a1 1 0 0 0-2 0Zm1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5Z" />
                    </svg>
                    <p className="motto">Personalized Exploration for Authentic Adventures. Discover the world in a way that defines you! 🌍✨</p>
               </div>
               <div className="footerSettings" style={{"left": "35vw"}}>
                    <h3>Service</h3>
                    <a href="/test" style={{"width": "100%", "textAlign": "start"}}>Test</a>
               </div>
               <div className="footerSettings" style={{"left": "65vw"}}>
                    <h3>Contact Us</h3>
                    <a href="/contact" style={{"width": "100%", "textAlign": "start"}}>Contact page</a>
               </div>
               </span>
               <div className="line"></div>
               <p className="copy">&copy; 2024 ExploroQuest. All Rights Reserved.</p>
          </footer>
     )
}