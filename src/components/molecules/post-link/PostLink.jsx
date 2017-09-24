import React from 'react';
import Link from "gatsby-link";
import PropTypes from 'prop-types';
import './PostLink.scss';

const propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
};

const PostLink = ({
  category,
  title
  }) => (
    // (<Link to={post.path} key={post.title}>kl
    <div className="PostLink-card">
      <img className="PostLink-image" src="http://archsmarter.com/wp-content/uploads/2014/03/Learn-to-code1.jpg" />
      <span>{category}</span>
      <span>{title}</span>
    </div>
  );

PostLink.propTypes = propTypes;
PostLink.defaultProps = defaultProps;

export default PostLink;
