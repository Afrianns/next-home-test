"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageRender(params: { img: string }) {
  const [imgSrc, setImgSrc] = useState(params.img);
  return (
    <div className="w-full h-[200px] md:w-[300px] md:h-[200px] bg-gray-300 relative rounded-md">
      <Image
        onError={() => setImgSrc("/young-male-designer.jpg")}
        src={imgSrc}
        alt="Image"
        className="rounded-md absolute top-0 left-0 h-full w-full object-cover"
        width={500}
        height={500}
        sizes="auto"
      />
    </div>
  );
}
