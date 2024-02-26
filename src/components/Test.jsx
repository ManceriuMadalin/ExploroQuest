import Form from "./Form";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { getResult } from "./GetResult";
import { countrys } from "../country";

export let resultFromTest

export default function Test() {
     const handleResult = () => {
          resultFromTest = getResult(countrys, 
               document.querySelector("#firstQ"),
               document.querySelector("#secondQ"),
               document.querySelector("#thirdQ"),
               document.querySelector("#fourthQ"))
          console.log(resultFromTest)
     }
     const questions = [
          {
               question: "How old are you?",
               placeholder: "",
               identification: "firstQ",
          },
          {
               question: "What's your name?",
               placeholder: "",
               identification: "secondQ",
          },
          {
               question: "What are you doing here?",
               placeholder: "",
               identification: "thirdQ",
          },
          {
               question: "What are you doing here?",
               placeholder: "",
               identification: "fourthQ",
          }
     ];

     let qs = [];

     questions.forEach((q) => {
          qs.push(<Form identification={q.identification} question={q.question} placeholder={q.placeholder} />);
     });

     return (
          <>
               <Navbar />
               <div className="quiz">{qs}</div>
               <a href="/result"><button onClick={handleResult} type="button" className="result">Result</button></a>
               <Footer top={10} />
          </>
     )
}