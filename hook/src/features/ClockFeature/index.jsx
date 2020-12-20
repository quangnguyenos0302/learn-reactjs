import React, { useEffect, useState } from "react";

function formatDate(date) {
  let hours = `0${date.getHours()}`.slice(-2);
  let minutes = `0${date.getMinutes()}`.slice(-2);
  let seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function ClockFeature(props) {
  const [timeString, setTimeString] = useState(() => {
    return "";
  });
  useEffect(() => {
    const timeStamp = setInterval(() => {
      const now = new Date();
      const newTimeStamp = formatDate(now);
      setTimeString(newTimeStamp);
    }, 1000);
    return () => {
      console.log("ok");
      clearInterval(timeStamp);
    };
  }, []);
  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

export default ClockFeature;
