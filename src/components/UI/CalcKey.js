import React, { useRef } from "react";

const CalcKey = (props) => {
  const keyRef = useRef();
  const keyClickHandler = () => {
    console.log(keyRef.current.value);
  };

  const btnTypeClass = `btn-${props.category}`;
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
