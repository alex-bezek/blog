import React from 'react';
import Link from "gatsby-link";
import PropTypes from 'prop-types';
import CategoryPill from '../../atoms/category-pill/CategoryPill';
import './PostLink.scss';

const propTypes = {
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
};

const defaultProps = {
};

const PostLink = ({
  category,
  path,
  title,
  image,
  tags,
  date,
  }) => (
    <Link to={path} className="PostLink-card">
      <div className="PostLink-image" style={{ backgroundImage: `url(${image})` }} />
      <article className="PostLink-description">
        <div className="PostLink-title">{title}</div>
        <div className="PostLink-info">
          <div className="PostLink-tags">
            {tags.map(tag => (`#${tag}, `))}
          </div>
          <hr className="PostLink-seperator" />
          <div className="PostLink-meta">
            {/* Hack off the first 4 letters to drop the day of the week */}
            <span>{new Date(date).toDateString().slice(4)}</span>
            <CategoryPill
              category={category}
              size={'small'}
            />
            <span className="PostLink-timeToRead">5 min</span>
          </div>
        </div>
      </article>
    </Link>
  );

PostLink.propTypes = propTypes;
PostLink.defaultProps = defaultProps;

export default PostLink;
