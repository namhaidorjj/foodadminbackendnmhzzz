import React from "react";
import { Categorys } from "@/components/Categorys";
import { NewFood } from "@/components/NewFood";

export const CreatFood = () => {
  return (
    <div className="flex h-full">
      <div className="pr-4">
        <Categorys />
      </div>
      <div className="w-full pr-[112px] pt-[26px] pl-4 bg-[#F7F7F8] min-h-screen">
        <NewFood />
      </div>
    </div>
  );
};
