import React from "react";
import { SearchSVG } from "@/pages/SVGs/SearchSVG";
import { SagsSVG } from "@/pages/SVGs/SagsSVG";
import { LoginSVG } from "@/pages/SVGs/LoginSVG";

export const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between pl-[115px] pr-[115px] pb-2 pt-2">
        <div className="flex items-center">
          <img
            src="./favicon.png"
            alt=""
            className="w-[30px] h-[30px] rounded-2xl"
          />
          <div className="flex h-[41px] items-center w-[388px] justify-between pl-[24px]">
            <button className="hover:text-[#18BA51] ">
              <a href="/">НҮҮР</a>
            </button>
            <a href="/Menu">
              <button className="hover:text-[#18BA51] ">ХООЛНЫ ЦЭС</button>
            </a>
            <a href="./Radius">
              <button className="hover:text-[#18BA51] ">ХҮРГЭЛТИЙН БҮС</button>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="flex w-[260px] h-[40px] items-center gap-2 border-black border rounded-lg pl-4">
            <SearchSVG />
            <input
              //   onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Хайх"
            />
          </div>
          <button
            // onClick={() => setIsBasketBarVisible(true)}
            className="flex gap-2">
            <SagsSVG />
            {/* <div><Basket /></div> */}
            <p className="hover:text-[#18BA51] ">Сагс</p>
          </button>
          <button className="flex gap-2">
            <LoginSVG />
            <a className="hover:text-[#18BA51]" href="/login">
              Нэвтрэх
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
