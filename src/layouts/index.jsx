import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import NavigationContainer from '../components/molecules/navigation/NavigationContainer';
import './Layout.scss';


export default class MainLayout extends React.Component {
  getLocalTitle() {
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "about/") {
      title = "About";
    }
    return title;
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className="LayoutIndex-main-content">
          <NavigationContainer />
          {children()}
        </div>
      </div>
    );
  }
}
