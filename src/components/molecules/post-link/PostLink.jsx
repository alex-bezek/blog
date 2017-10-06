import React from 'react';
import Link from "gatsby-link";
import PropTypes from 'prop-types';
import './PostLink.scss';

const propTypes = {
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const defaultProps = {
};

const PostLink = ({
  category,
  path,
  title,
  image
  }) => (
    <div className="PostLink-card">
      <Link to={path} key={path}>

        {/* <h1>{image}</h1> */}
        {
          image ?
            <img className="PostLink-image" src={image} alt="" />
            :
            <img className="PostLink-image" src="http://archsmarter.com/wp-content/uploads/2014/03/Learn-to-code1.jpg" />
        }
        <span>{category}</span>
        <span>{title}</span>
      </Link>
    </div>
  );

PostLink.propTypes = propTypes;
PostLink.defaultProps = defaultProps;

export default PostLink;
