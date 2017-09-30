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
    <Link to={path} key={path}>
      <div className="PostLink-card">
        {/* <h1>{image}</h1> */}
        {
          image ?
            <img src={image} alt="" />
            :
            <img className="PostLink-image" src="http://archsmarter.com/wp-content/uploads/2014/03/Learn-to-code1.jpg" />
        }
        <span>{category}</span>
        <span>{title}</span>
      </div>
    </Link>
  );

PostLink.propTypes = propTypes;
PostLink.defaultProps = defaultProps;

export default PostLink;
