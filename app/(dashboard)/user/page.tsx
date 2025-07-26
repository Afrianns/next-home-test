"use client";

import Combobox from "@/components/combobox";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function DashboardUser() {
  return (
    <div>
      <div className="w-full h-[450px] relative">
        <Image
          src="/young-male-designer.jpg"
          alt="Image"
          className="rounded-md object-cover"
          fill
        />
        <div className="bg-blue-600 w-full h-full absolute opacity-80"></div>
        <div className="absolute space-y-5 w-full h-full text-center flex flex-col justify-center items-center max-sm:px-2">
          <h1 className="text-4xl font-bold w-full max-w-[600px] text-white">
            The Journal: Design Resources, Interviews, and Industry News
          </h1>
          <p className="text-white">Your daily dose of design insight</p>

          <div className="flex items-center gap-x-3 bg-blue-400 p-2 rounded-lg w-full max-w-[500px] shadow-lg max-md:flex-col max-md:gap-y-2">
            <Combobox />
            <Input type="text" className="bg-white" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full max-w-[1000px] mx-auto space-y-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:max-w-[500px]">
        {[1, 2, 3].map((key) => {
          return (
            <section className="p-3 space-y-2 w-full max-w-[500px]" key={key}>
              <Image
                src="/young-male-designer.jpg"
                alt="Image"
                className="rounded-md object-cover"
                width={500}
                height={500}
              />
              <span className="text-xs leading-none font-medium text-gray-600">
                05 Agustus 2025
              </span>
              <h3 className="text-md font-semibold">
                Cyber security essentials for every developer.
              </h3>
              <p className="text-gray-600 text-sm">
                consectetur adipisicing elit. In error deleniti nam. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                Badge
              </Badge>
            </section>
          );
        })}
      </div>
    </div>
  );
}
