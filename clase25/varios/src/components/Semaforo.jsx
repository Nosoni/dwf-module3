import React from "react";
import "./semaforo.css";
import { useState } from "react";

const Semaforo = () => {
  const colors = ["red", "yellow", "green"];
  const [color, setColor] = useState("grey");
  const [modo, setModo] = useState("dark");

  const cambiarColor = (item) => {
    setColor(item);
  };

  return (
    <>
      <div className={"App" + { modo }}>
        {colors.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="light"
                onClick={() => cambiarColor(item)}
                style={{ backgroundColor: item === color ? item : "grey" }}
                // style={{ backgroundColor: "grey" }}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Semaforo;
