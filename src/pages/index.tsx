import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="jordanmmck">
      <p>jordanmmck version two</p>
      <StaticImage alt="dog" src="../images/clockwork.jpg" />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
