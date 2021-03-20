import React from "react";
import Links from "./Links";
import Logo from "./Logo";

const Navbar = () => {
  const styles = {
    container: {
      flexDirection: "row",
      display: "flex",
      justifyContent: "space-between",
    },

    sponsors: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
    },
  };
  return (
    <div className="nav-container" style={styles.container}>
      <Logo />
      <Links />
      <div className="sponsors" style={styles.sponsors}>
        sponsors
      </div>
    </div>
  );
};

export default Navbar;
