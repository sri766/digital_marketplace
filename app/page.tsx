"use client";
import Image from "next/image";
import MarqueeDemoVertical from "./components/Marquee";
import { ReactNode } from "react";
import { Component, Figma, Globe, Origami, Paintbrush, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ShimmerButton from "@/components/magicui/shimmer-button";

interface Category {
  id: number;
  name: string;
  image: ReactNode | undefined;
  content: string;
}
export const homeCategory=[
  {
    id: 0,
    name:"Graphic Design",
    image: <Paintbrush/>,
    content: "Explore a wide range of graphic designs from minimalist logos to intricate illustrations."
  },
  {
    id:1,
    name:"Web Design",
    image: <Figma/>,
    content: "Find the perfect template for your website, whether it's for a blog, portfolio, or e-commerce."
  },
  {
    id:2,
    name:"UI/UX Design",
    image: <Origami/>,
    content: "Get inspired by the latest trends in user interface and user experience design."
  },
  {
    id:3,
    name: 'Custom Components',
    image: <Component/>,
    content: "Need something unique? Our designers can create custom designs just for you."
  }
]
export default function Home() {
  return (
    <div className="relative max-w-7xl w-full px-10 flex items-center justify-evenly mx-auto">
      <div className="flex flex-col w-1/2">
        <div className="">
          <p className="text-md text-fuchsia-400 bg-slate-900 border border-purple-400 px-4 w-fit rounded-full shadow-inner shadow-purple-700"><Sparkles size={20} className="inline m-2"/>Join Our Community</p>
          <h1 className="lg:text-6xl text-4xl py-2 font-bold text">Ready to Create and Discover new 
          <span className="text-gradient mx-2">DesignHive</span>
          </h1>
          <h3 className="lg:text-xl text-md text-slate-400 mt-2">
            Discover Our Collections  
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-start justify-center">
        {
          homeCategory.map((items)=>(
            <Card key={items.id} className="bg-[#030014] border-none text-white">
              <CardHeader>
                <div className="flex items-center gap-2">
                  {items.image}
                  <h3 className="text-md font-semibold">{items.name}</h3>
                </div>
              </CardHeader>
            </Card>
          ))
        }
        </div>
        <ShimmerButton className="w-fit px-6 py-2 my-4 mx-auto">
            Get Started
        </ShimmerButton>
      </div>
      <div className="w-1/2">
       <MarqueeDemoVertical/>
      </div>
    </div>
  );
}
