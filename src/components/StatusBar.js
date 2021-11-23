import moment from "moment";
import React, { useState, useEffect } from "react";

const StatusBar = () => {
  const defaultTime = `${moment().format("hh:mm")}`;
  const [time, setTime] = useState(defaultTime);
  useEffect(() => {
    setInterval(() => {
      let newTime = `${moment().format("hh:mm")}`;
      setTime(newTime);
    }, 1000);
  }, []);
  return (
    <div className="px-2 font-bold flex justify-between">
      <span>{navigator.connection.effectiveType}</span>
      <span>{time}</span>
    </div>
  );
};

export default StatusBar;
