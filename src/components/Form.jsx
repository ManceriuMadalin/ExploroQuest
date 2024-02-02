import React from "react";

export default function Form(props) {
     return (
          <div className="questionForm">
               <h3>{props.question}</h3>
               <input type="text" placeholder="Answer (Yes/No)" />
          </div>
     );
}