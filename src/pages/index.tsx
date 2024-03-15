import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CreatFood } from "./CreatFood";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="">
        <CreatFood />
      </div>
    </div>
  );
}
