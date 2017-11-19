import React from "react";
import Proptypes from 'prop-types';
import CategoryPill from '../../atoms/category-pill/CategoryPill';

const propTypes = {
    categories: Proptypes.arrayOf(Proptypes.string).isRequired,
}

const CategoryList = ({ categories }) => (
    <div>
        <CategoryPill
            key='all'
            size='medium'
            category='all'
        />

        { categories.map(category => (
            <CategoryPill
                key={category}
                size='medium'
                category={category}
            />
        ))}
    </div>
)

CategoryList.propTypes = propTypes;

export default CategoryList;
