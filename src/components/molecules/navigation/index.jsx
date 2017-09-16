import React from "react";
import Link from "gatsby-link";

const Navigation = () => (
  <ul>
    <Link to={'/'} key={'home-link'}>
      <p>Home</p>
    </Link>
  </ul>
)

export default Navigation;
