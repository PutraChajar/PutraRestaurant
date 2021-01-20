import DataSource from '../../data/data-source.js';
import "../../components/ptr-item.js";

const Restaurant = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Jelajahi Restoran</h2>
        <div id="movies" class="movies">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const dataRestaurants = await DataSource.loadRestaurants();
    const moviesContainer = document.querySelector('#movies');
    dataRestaurants.forEach((restaurant) => {
      const ptrItemElement = document.createElement('ptr-item');
      ptrItemElement.data = restaurant;
      moviesContainer.appendChild(ptrItemElement);
    });
  },
};

export default Restaurant;