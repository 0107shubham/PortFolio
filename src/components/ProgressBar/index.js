import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";

const ProgressBar = ({ done, start }: any) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (start) {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };
      setStyle(newStyle);
    }
  }, [start]);

  return (
    <div className="progress ">
      <div
        className="progress-done transition-opacity duration-1000 ease-out delay-300"
        style={style}
      >
        {done}%
      </div>
    </div>
  );
};

export default ProgressBar;
