
import './CategoryCard.css';
import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
    return (
        <a>
            <div className="category-card" key={category.name}>
                <img src={category.image} alt={category.name} />
                <div className='content'>
                    <h3>{category.name}</h3>
                </div>

            </div>
        </a>


    );
};

CategoryCard.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default CategoryCard;