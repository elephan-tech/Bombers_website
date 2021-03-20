import Link from "next/link";
import React from "react";
import routes from "../data/routes";

const Links = () => {
  const styles = {
    links: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
      width: "50%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.links}>
      {routes.map((route) => (
        <Link href={route.url}>{route.title}</Link>
      ))}
    </div>
  );
};

export default Links;
