import Link from "next/link";
import React from "react";
const players = () => {
  return (
    <>
      <div>Players</div>

      <Link href="./">
        <a>Home</a>
      </Link>
    </>
  );
};

export default players;
