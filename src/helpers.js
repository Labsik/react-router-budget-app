// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Delete from local storage
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
