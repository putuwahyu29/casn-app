/* eslint-disable jsx-a11y/alt-text */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Thumbnail = (props: any) => {
  const { src, fallback, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
};

export default Thumbnail;
