import React from "react";
import PropTypes from 'prop-types';
import './CategoryPill.scss';

const propTypes = {
    category: PropTypes.oneOf(['all', 'Frontend', 'Devops', 'Soft']).isRequired,
    size: PropTypes.oneOf(['medium', 'small']),
}

const defaultProps = {
    size: 'medium'
}

const CategoryPill = ({ category, size, text }) => (
    category === 'all' ?
        <div className="CategoryPill CategoryPill-all">All Categories</div>
        :
        <div className={`CategoryPill CategoryPill-specific CategoryPill-${category}`}>
            {category}
        </div>
)

CategoryPill.propTypes = propTypes;
CategoryPill.defaultProps = defaultProps;

export default CategoryPill;
