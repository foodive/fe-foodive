export const getRestaurant = () => {
  return fetch("https://foodive-be.herokuapp.com/restaurants/?location=41.91909,-87.696983").then((response) => {
    if (!response.ok) {
      throw new Error("Sorry, something went wrong!")
    } else {
      return response.json();
    }
  });
};