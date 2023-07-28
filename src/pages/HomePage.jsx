// HomePage.js

import  { useEffect, useState } from "react";
import api from "../api/api";
import HomeBanner from "../components/HomeBanner";
import ProductList from "../components/ProductList";
import "./HomePage.css";
import CategoryList from "../components/CategoryList";
import FarmerList from "../components/FarmerList";
import AboutUs from "../components/AboutUs";
import TestimonialList from "../components/TestimonialList";

const HomePage = () => {

  // const [products, setProducts] = useState([]);


  // useEffect(() => {
  //   // Fetch the list of products when the component mounts
  //   api
  //     .getProducts()
  //     .then((response) => setProducts(response.data.products))
  //     // Catch any errors and log them to the console
  //     .catch((err) => console.log(err));
  // }, []);

  const categories = [
    {
        name: 'Fruits',
        image: "/categoryImages/fruits.jpg",

    },
    {
        name: 'Vegetables',
        image: "/categoryImages/vegetables.jpg",

    },
    {
        name: 'Dairy',
        image: "/categoryImages/dairy.jpg",
    },
    {
        name: 'Meat',
        image: "/categoryImages/meat.jpg",

    },
    {
        name: 'Beverages',
        image: "/categoryImages/beverages.jpg",

    },
    {
        name: 'Bakery',
        image: "/categoryImages/bakery.jpg",

    }
];

const products = [
    {
        name: 'Apple',
        image: '/productImages/apple.jpg',
        price: 1.99,
        category: 'Fruits',
        id: 1,
    },
    {
        name: 'Banana',
        image: '/productImages/banana.jpg',
        price: 0.99,
        category: 'Fruits',
        id: 2,
    },
    {

        name: 'Orange',
        image: '/productImages/orange.jpg',
        price: 1.49,
        category: 'Fruits',
        id: 3,
    },
    { 
        name: 'Tomato',
        image: '/productImages/tomato.jpg',
        price: 2.99,
        category: 'Vegetables',
        id: 4,
    },
    {
        name: 'Potato',
        image: '/productImages/potato.jpg',
        price: 1.99,
        category: 'Vegetables',
        id: 5,
    },
];

const farmers = [
    {
        name: 'John Doe',
        image: '/farmerImages/farmer1.jpg',
        rating: 4,
        likes: 0,
        dislikes: 0,
        id: 1,
    },
    {
        name: 'Jane Doe',
        image: '/farmerImages/farmer2.jpg',
        rating: 4,
        likes: 0,
        dislikes: 0,
        id: 2,
    },
    {
        name: 'John Smith',
        image: '/farmerImages/farmer3.jpg',
        rating: 4,
        likes: 0,
        dislikes: 0,
        id: 3,

    },
    {
        name: 'Jane Smith',
        image: '/farmerImages/farmer4.jpg',
        rating: 4,
        likes: 0,
        dislikes: 0,
        id: 4,
    },
    {
        name: 'John Doe',
        image: '/farmerImages/farmer5.jpg',
        rating: 4,
        likes: 0,
        dislikes: 0,
        id: 5,
    },
    {
        name: 'Jane Doe',
        image: '/farmerImages/farmer6.jpg',
        rating: 3,
        likes: 0,
        dislikes: 0,
        id: 6,
    },

];

const testimonials = [
    {
        name: 'John Doe',
        image: '/testimonialImages/testimonial1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.',
        rating: 4,
        id: 1,
    },
    {
        name: 'Jane Doe',
        image: '/testimonialImages/testimonial2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.',
        rating: 4,
        id: 2,
    },
    {
        name: 'John Smith',
        image: '/testimonialImages/testimonial3.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.',
        rating: 4,
        id: 3,

    },
    {
        name: 'Jane Smith',
        image: '/testimonialImages/testimonial4.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.',
        rating: 4,
        id: 4,
    },
    {
        name: 'John Doe',
        image: '/testimonialImages/testimonial5.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed vitae nisi eget nunc varius aliquam. Sed euismod, nisl quis aliquet ultricies, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl.',
        rating: 4,
        id: 5,
    },

];


  return (
    <div className="home-page">
      <HomeBanner />
     <CategoryList categories={categories}/>
      <ProductList products={products} />
      <FarmerList farmers={farmers} />
      <AboutUs />
      <TestimonialList testimonials={testimonials} />
    </div>
  );
};

export default HomePage;