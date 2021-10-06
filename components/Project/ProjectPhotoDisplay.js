import React from "react";
import Image from "next/image";

export default function ProjectPhoto({ projectImgPath }) {
  return (
    <div>
      <Image src={projectImgPath} width={700} height={500}></Image>
    </div>
  );
}
