import * as React from "react";
import Link from "gatsby-link";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Link to="/til/">
        <h2>TIL</h2>
      </Link>
      <Link to="/portfolio/">
        <h2>Portfolio</h2>
      </Link>
      <Link to="/resume/">
        <h2>Resume</h2>
      </Link>
      <Link to="/log/">
        <h2>Log</h2>
      </Link>
    </main>
  );
};

export default IndexPage;
