import React from "react";
import './Jumbotron.scss';

const jumbotron = require('./jumbotron.jpg');

export default () => (
  <img className="Jumbotron" src={jumbotron} alt='a fancy backround' />
)
