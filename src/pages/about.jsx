import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div >
        <Helmet title={`About | ${config.siteTitle}`} />
        <div>
          <h1>
            Edit About component or pages/about.jsx to include your information.
          </h1>
        </div>
      </div>
    );
  }
}

export default AboutPage;
