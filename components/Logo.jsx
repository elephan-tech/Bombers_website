import Image from "next/image";
import React from "react";

const Logo = () => {
  const bombersLogo = "/bombersLogo.svg";
  return <Image src={bombersLogo} width="50px" height="50px" />;
};

export default Logo;
