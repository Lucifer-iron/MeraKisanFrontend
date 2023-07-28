
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './CategoryList.css';

const CategoryList = ({ categories }) => {



    const splideOptions = {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        breakpoints: {
            768: {
                perPage: 2,
            },
            576: {
                perPage: 1,
            },
        },

    };



    return (

        <div className="category-list">
            <h2 className="section-title">Browse Our Hottest Categories</h2>
            <Splide options={splideOptions}>
                {categories.map((category) => (
                    <SplideSlide key={category.name}>
                        <CategoryCard category={category} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>




    );
}

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default CategoryList;
