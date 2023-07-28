import axios from "axios";

// Define the base URL of your backend server
const baseURL = "http://localhost:3000/api"; // Replace with your actual backend URL

// Define your API functions
const api = {
  //test API
  test: () => axios.get(`${baseURL}/test`),

  // Farmer APIs
  getFarmers: () => axios.get(`${baseURL}/farmers`),
  getFarmerById: (id) => axios.get(`${baseURL}/farmers/${id}`),

  // Add more farmer APIs as needed

  // Consumer APIs
  getConsumers: () => axios.get(`${baseURL}/consumers`),
  getConsumerById: (id) => axios.get(`${baseURL}/consumers/${id}`),
  // Add more consumer APIs as needed

  // Product APIs
  getProducts: () => axios.get(`${baseURL}/products`),
  getProductById: (id) => axios.get(`${baseURL}/products/${id}`),
  // Add more product APIs as needed

  // Review APIs
  getReviews: () => axios.get(`${baseURL}/reviews`),
  postReview: (data) => axios.post(`${baseURL}/reviews`, data),
  // Add more review APIs as needed

  //auth APIs
  login: (email, password) =>
    axios.post(`${baseURL}/login`, { email, password }),
  register: (name, email, password, role) =>
    axios.post(`${baseURL}/register`, {
      name,
      email,
      password,
      role,
    }),
  resetPassword: (email) => axios.post(`${baseURL}/reset-password`, { email }),
  updatePassword: (password, token) =>
    axios.post(
      `${baseURL}/update-password`,
      { password },
      { headers: { Authorization: `Bearer ${token}` } }
    ),
};

export default api;
