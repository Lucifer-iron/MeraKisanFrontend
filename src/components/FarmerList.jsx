import PropTypes from 'prop-types';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './FarmerList.css';
import FarmerCard from './FarmerCard';

const FarmerList = ({ farmers }) => {

    const splideOptions = {
        type: 'loop',
        perPage: 4,
        perMove: 1,
        gap: '3rem',
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
        <div className="farmer-list">
        <h2 className="section-title">Rising Farmers</h2>
        <Splide options={splideOptions}>
            {farmers.map((farmer) => (
                <SplideSlide key={farmer.id}>
                    <FarmerCard farmer={farmer} />
                </SplideSlide>
            ))}
        </Splide>
    </div>

  );
};

FarmerList.propTypes = {
    farmers: PropTypes.array.isRequired,
};

export default FarmerList;