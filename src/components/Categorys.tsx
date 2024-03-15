import React from "react";
import { PlusSVG } from "@/pages/SVGs/PlusSVG";

export const Categorys = () => {
  return (
    <div className="pl-[120px] pt-[26px]">
      <div className="pb-10">
        <p className="font-bold text-[22px]">Food menu</p>
      </div>
      <div>
        <button className="flex gap-2 text-[#5E6166] border-2 rounded-lg w-[258px] h-[40px] items-center justify-center">
          <PlusSVG />
          <p>Create new category</p>
        </button>
      </div>
    </div>
  );
};
