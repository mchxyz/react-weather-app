// import React,{ useEffect, useRef, useState } from "react";


// export default function App() {
//   let newDate = useRef(new Date());

//   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   let [currentDay, setCurrentDay] = useState(days[newDate.current.getDay()]);
//   let [currentHours, setCurrentHours] = useState(newDate.current.getHours());
//   let [currentMinutes, setCurrentMinutes] = useState(newDate.current.getMinutes());
//   let [currentSeconds, setCurrentSeconds] = useState(newDate.current.getSeconds());

//   setInterval(() => {
//     newDate.current = new Date();
//     setCurrentHours(newDate.current.getHours());
//     setCurrentMinutes(newDate.current.getMinutes());
//   }, 1000);
//   let currentTime = `${currentDay} ${currentHours}:${currentMinutes}`;
//   useEffect(() => {
//   });

//   if (currentMinutes < 10) {
//     return currentDay + " " + currentHours + ":" + "0" + currentMinutes;
//   } else {
//     return currentDay + " " + currentHours + ":" + currentMinutes;
//   }

//   return (
//     <div>
//       <div>{currentTime}</div>
//     </div>
//   );
// }
