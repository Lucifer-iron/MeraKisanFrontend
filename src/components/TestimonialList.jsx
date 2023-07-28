import PropTypes from 'prop-types';
import TestimonialCard from './TestimonialCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './TestimonialList.css'


const TestimonialList = ({ testimonials }) => {

    const splideOptions = {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        gap: '2rem',
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
        <div className="testimonial-list">
            <h2 className="section-title">What Our Customers says ?</h2>

            <Splide options={splideOptions}>
                {testimonials.map((testimonial) => (
                    <SplideSlide key={testimonial.id}>
                        <TestimonialCard
                            testimonial={testimonial} />
                    </SplideSlide>
                ))}
            </Splide>

        </div>
    );
};

TestimonialList.propTypes = {
    testimonials: PropTypes.array.isRequired,
};

export default TestimonialList;