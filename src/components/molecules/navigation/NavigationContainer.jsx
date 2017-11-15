import React from "react";
import Navigation from './Navigation';
import Jumbotron from '../../atoms/jumbotron/Jumbotron';
import config from "../../../../data/SiteConfig";
import './NavigationContainer.scss';

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
    <div className="NavigationContainer">
      <Navigation
        links={data.links}
        userName={config.userName}
      />
      <Jumbotron />
    </div>
  )
}
export default NavigationContainer;
