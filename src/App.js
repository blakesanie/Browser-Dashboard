import { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bubble from "./Bubble.js";
import { items } from "./items.js";

function App() {
  const [currentTime, setCurrentTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);

  const textInput = useRef();

  const observeEnter = (e) => {
    if (e.code == "Enter" && textInput.current.value.length > 0) {
      window.location.href = `https://www.google.com/search?q=${textInput.current.value
        .split(" ")
        .join("+")}`;
    }
  };

  useEffect(() => {
    textInput.current.focus();

    document.addEventListener("keydown", observeEnter);

    const timer = setInterval(() => {
      const now = new Date();
      let hours = now.getHours();
      let period = hours > 12 ? "pm" : "am";
      hours = hours % 12;
      if (hours == 0) {
        hours = 12;
      }
      let minutes = "" + now.getMinutes();
      if (minutes.length == 1) {
        minutes = "0" + minutes;
      }
      setCurrentTime(`${hours}:${minutes} ${period}`);
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date = `${days[now.getDay()]}, ${
        monthNames[now.getMonth()]
      } ${now.getDate()}, ${now.getFullYear()}`;
      setCurrentDate(date);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="bgHolder">
        <div className="bg"></div>
      </div>
      <div className="App">
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <div className="foreground">
          <div className="date">
            <h1>{currentTime}</h1>
            <h2>{currentDate}</h2>
          </div>
          <input
            type="text"
            placeholder="Search Google"
            className="search"
            ref={textInput}
            autofocus
          ></input>
          <div className="itemHolder">
            {items.map((item) => {
              return (
                <a className="item" href={item.url} key={item.title}>
                  <img src={item.image} />
                  <p className="itemTitle">{item.title}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
