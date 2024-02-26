import React from "react";

export default function Form(props) {
     return (
          <div className="questionForm">
               <h3>{props.question}</h3>
               <input id={props.identification} type="text" placeholder={props.placeholder} />
          </div>
     );
}