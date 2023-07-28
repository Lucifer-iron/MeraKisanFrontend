export const validateName = (name) => {
  if (!name) {
    return "Name is required";
  }

  if (name.length < 3) {
    return "Name must be at least 3 characters long";
  }

  return "";
};

export const validateEmail = (email) => {
  if (!email) {
    return "Email is required";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }

  return "";
};
