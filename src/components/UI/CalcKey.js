import React, { useRef } from "react";

const CalcKey = (props) => {
  const keyRef = useRef();
  const keyClickHandler = () => {
    console.log(keyRef.current.value);
  };

  let btnTypeClass = "";
  if (props.category === "input") {
    btnTypeClass = "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300";
  } else if (props.category === "cancel") {
    btnTypeClass = "bg-yellow-100 hover:bg-yellow-200 focus:bg-yellow-200";
  } else if (props.category === "operation") {
    btnTypeClass = "bg-red-500 hover:bg-red-600 focus:bg-red-600";
  } else if (props.category === "result") {
    btnTypeClass = "bg-green-500 hover:bg-green-600 focus:bg-green-600";
  }
  return (
    <button
      className={`${btnTypeClass} text-3xl  w-full rounded-xl ${
        props.children === 0 ? "col-start-1 col-end-3" : ""
      }   transition`}
      type={props.type}
      onClick={keyClickHandler}
      value={props.value}
      ref={keyRef}
    >
      {props.children}
    </button>
  );
};

export default CalcKey;
