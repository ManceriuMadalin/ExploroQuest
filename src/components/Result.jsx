import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import Announce from "./Announce";
import Country from "./Country";
import { resultFromTest } from "./Test";

console.log(resultFromTest)

export default function App() {
  const [hideAnnounce, setHideAnnounce] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHideAnnounce(true);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Navbar />
      {!hideAnnounce && <Announce />}
      <Country />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
