import React from "react";
import { FoodSVG } from "@/pages/SVGs/FoodSVG";
import { Instagram } from "@/pages/SVGs/Instagram";
import { Facebook } from "@/pages/SVGs/FAcebook";
import { Twitter } from "@/pages/SVGs/Twitter";

export const Footer = () => {
  return (
    <div className="bg-[url('/bgPhoto.png')] bg-[#18BA51] text-white">
      <div className="flex absolute  bg-[#18BA51] w-[100%] "></div>
      <div className="relative pl-[120px] pr-[120px] pt-[110px] pb-[110px] text-white flex flex-col gap-10">
        <div className="flex gap-2 items-center justify-center">
          <FoodSVG />
          <p>Food Delivery</p>
        </div>
        <div className="flex justify-between">
          <a href="/">
            <button className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500">
              Нүүр
            </button>
          </a>

          <button className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500">
            Холбоо барих
          </button>
          <a href="/Menu">
            <button className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500">
              Хоолны цэс
            </button>
          </a>

          <a href="/TempsOfService">
            <button className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500">
              Үйлчилгээний нөхцөл
            </button>
          </a>
          <a href="./Radius">
            <button className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500">
              Хүргэлтийн бүс
            </button>
          </a>
          <a href="/Privacy">
            <button className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500">
              Нууцлалын бодлого
            </button>
          </a>
        </div>
        <div className="flex gap-[18px] items-center justify-center">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
        <div className="border-t"></div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p>© 2024 Pinecone Foods LLC </p>
          <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </div>
  );
};
