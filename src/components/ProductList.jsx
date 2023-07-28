// ProductList.jsx
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./ProductList.css";

const ProductList = ({ products }) => {

  const splideOptions = {
    type: 'loop',
    perPage: 5,
    perMove: 3,
    gap: '1rem',
    pagination: true,
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
      <h2 className="section-title">Popular Products</h2>
      <Splide options={splideOptions}>
        {products.map((product) => (
          <SplideSlide key={product._id}>
            <ProductCard key={product._id} product={product} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};  

export default ProductList;
