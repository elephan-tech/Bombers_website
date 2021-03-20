import React from "react";
import Page from "../components/Page";

const Shop = () => {
  const styles = {
    card: {
      height: 200,
      width: 200,
      background: "red",
    },
  };
  return (
    <Page title="Shop">
      {["cosa 1", "cosa 2"].map((cosa) => (
        <div style={styles.card}>{cosa}</div>
      ))}
    </Page>
  );
};

export default Shop;
