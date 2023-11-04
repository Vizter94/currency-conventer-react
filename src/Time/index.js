import { useState, useEffect } from "react";
import "./style.css";

export const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="backgroundTime">
      <div className="time">
        Aktualny czas:
        {date.toLocaleString(undefined, {
          weekday: "long",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          day: "numeric",
          month: "long",
        })}
      </div>
    </div>
  );
};
