import { useState } from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.css';
import { FaStar,FaRegStar } from 'react-icons/fa';

const TestimonialCard = ({ testimonial }) => {



  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={testimonial.image} alt="Testimonial" />
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-name">{testimonial.name}</h3>
        <p className="testimonial-designation">{testimonial.designation}</p>
        <p className="testimonial-company">{testimonial.company}</p>
        <p className="testimonial-location">{testimonial.location}</p>
        <p className="testimonial-date">{testimonial.date}</p>
        <p className="testimonial-description">{testimonial.description}</p>

        <div className="testimonial-rating">
          {[...Array(testimonial.rating)].map((_, i) => (
            <FaStar key={i} className='checked'/>
           
          ))}
          {[...Array(5 - testimonial.rating)].map((_, i) => (

            
            <span key={i + testimonial.rating}><FaRegStar/> </span>
          ))}
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

export default TestimonialCard;