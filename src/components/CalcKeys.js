import React from "react";
import CalcKey from "./UI/CalcKey";

const inputKeys = ["(", ")", 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
const operationKeys = ["/", "*", "-", "+"];

const CalcKeys = () => {
  return (
    <form className="h-4/6 grid grid-cols-4 gap-x-1 px-2 py-2">
      <div className="col-start-1 col-end-4 grid grid-cols-3 gap-1">
        <CalcKey key="C" type="button" category="cancel">
          C
        </CalcKey>
        {inputKeys.map((key) => (
          <CalcKey key={key} type="button" category="input" value={Number(key)}>
            {key}
          </CalcKey>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-1">
        {operationKeys.map((key) => (
          <CalcKey type="button" category="operation" key={key}>
            {key}
          </CalcKey>
        ))}
        <CalcKey type="submit" category="result" key="=">
          =
        </CalcKey>
      </div>
    </form>
  );
};

export default CalcKeys;
