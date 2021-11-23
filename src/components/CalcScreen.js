import React from "react";

const CalcScreen = () => {
  return (
    <div className="h-2/6 flex flex-col gap-y-3 justify-center items-end px-2">
      <div className="text-gray-500 font-semibold">45+23+100</div>
      <input
        type="number"
        className="bg-gray-50 text-gray-900 font-bold text-5xl w-full outline-none text-right"
        value={168}
        contentEditable="false"
        inputMode="none"
      />
    </div>
  );
};

export default CalcScreen;
