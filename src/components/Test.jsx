import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate instead of useHistory
import Form from "./Form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getResult } from "./GetResult";
import { countrys } from "../country";

export let resultFromTest;

export default function Test() {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory

  const handleResult = () => {
    resultFromTest = getResult(
      countrys,
      document.querySelector("#firstQ").value,
      document.querySelector("#secondQ").value,
      document.querySelector("#thirdQ").value,
      document.querySelector("#fourthQ").value
    );

    navigate("/result");
  };

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
    },
  ];

  let qs = [];

  questions.forEach((q) => {
    qs.push(
      <Form
        key={q.identification}
        identification={q.identification}
        question={q.question}
        placeholder={q.placeholder}
      />
    );
  });

  return (
    <>
      <Navbar />
      <div className="quiz">{qs}</div>
      <button onClick={handleResult} type="button" className="result">
        Result
      </button>
      <Footer top={10} />
    </>
  );
}
