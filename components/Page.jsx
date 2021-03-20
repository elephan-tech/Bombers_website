import React from "react";
import Layout from "./Layout";

const Page = (props) => {
  const { title, children } = props;
  return (
    <Layout>
      <h1>{title}</h1>
      {children}
    </Layout>
  );
};

export default Page;
