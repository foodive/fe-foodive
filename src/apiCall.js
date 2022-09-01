const getRestaurant = (lat, long) => {
  return fetch(`https://foodive-be.herokuapp.com/restaurants/?location=${lat},${long}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Sorry, something went wrong!")
    } else {
      return response.json();
    }
  });
};

export default getRestaurant;