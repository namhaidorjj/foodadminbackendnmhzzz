import React from "react";

export const NewFood = () => {
  return (
    <div className="  ">
      <div className="flex justify-between w-full h-full">
        <p className="text-[22px] text-bold">Breakfast</p>
        <a href="/AddFood">
          <button className="bg-[#18BA51] w-[130px] h-[35px] text-white rounded-lg flex items-center  justify-center">
            Add new food
          </button>
        </a>
      </div>
      <div></div>
    </div>
  );
};
