import Form from "./Form";
import Navbar from "./Navbar";
import Footer from "./Footer"

export default function Test() {
     const questions = [
          "How old are you?",
          "What's your name?",
          "What are you doing here?",
     ];

     let qs = [];

     questions.forEach((q) => {
          qs.push(<Form question={q} />);
     });

     return (
          <>
               <Navbar />
               <div className="quiz">{qs}</div>
               <Footer top={10}/>
          </>
     )
}
