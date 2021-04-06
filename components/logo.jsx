import Image from "next/image";
import Link from "./link";

const Logo = (props) => {
  const { ...boxProps } = props;
  return (
    <div {...boxProps}>
      <Link url="/" component="div">
        <Image
          src="/cropped-bombers_logo.png"
          alt="Bombers Logo"
          width="100px"
          height="100px"
        />
      </Link>
    </div>
  );
};

export default Logo;
