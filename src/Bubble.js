import { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";

export default function Bubble() {
  const [size, setSize] = useState(50 + Math.random() * 200);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [transitionTime, setTransitionTime] = useState(0);

  const randomPosition = () => {
    setX(Math.random() * (window.innerWidth - size));
    setY(Math.random() * (window.innerHeight - size));
  };

  useLayoutEffect(() => {
    randomPosition();
    setTimeout(randomPosition, 10);
    const loop = () => {
      const rand =
        (1 + Math.random() * 1) * (window.innerWidth + window.innerHeight) * 3;
      setTransitionTime(rand);
      setTimeout(() => {
        randomPosition();
        loop();
      }, rand);
    };

    loop();

    // randomPosition();
    // setTimeout(() => {
    //   randomPosition();
    // }, 100);
    // const movement = setInterval(() => {
    //   randomPosition();
    // }, 2000);
    return () => {
      //   clearInterval(movement);
    };
  }, []);

  return (
    <div
      className="bubble"
      style={{
        width: size,
        height: size,
        backgroundColor: "red",
        transform: `translate(${x}px, ${y}px)`,
        transition: `transform ${transitionTime / 1000}s ease`,
      }}
    ></div>
  );
}
