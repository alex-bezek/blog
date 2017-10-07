import React from "react";
import Navigation from './Navigation';
import config from "../../../../data/SiteConfig";

const NavigationContainer = () => {
  const data = {
    links: [
      {
        uri: '/#blog',
        text: 'Blog'
      },
      {
        uri: '/#other-stuff',
        text: 'Other Stuff'
      }
    ]
  };

  return (
    <div>
      <Navigation
        links={data.links}
        userName={config.userName}
      />
    </div>
  )
}
export default NavigationContainer;
