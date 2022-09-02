const getRestaurant = (lat, long, categories) => {
  return fetch(`https://foodive-be.herokuapp.com/restaurants/?location=${lat},${long}&categories=${categories}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Sorry, something went wrong!")
    } else {
      return response.json();
    }
  });
};

export default getRestaurant;