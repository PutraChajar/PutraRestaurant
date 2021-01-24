import DataSource from '../../data/data-source.js';
import Detail from './detail.js';
import "../../components/ptr-item.js";

const Restaurant = {
  async render() {
    return `
      <div class="content" id="maincontent">
        <h2 class="content__heading">Jelajahi Restoran</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const dataRestaurants = await DataSource.loadRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    dataRestaurants.forEach((restaurant) => {
      const ptrItemElement = document.createElement('ptr-item');
      ptrItemElement.data = restaurant;
      restaurantsContainer.appendChild(ptrItemElement);
    });
  },

  async handlerDetailClick() {
    const detail_resto = document.querySelectorAll('.detail_resto');
    
    for (var i = 0; i < detail_resto.length; i++) {
      detail_resto[i].addEventListener('click', async function() {
        let idresto = this.getAttribute('idresto');
        const ptritem = document.querySelector(`#${idresto}`);
        ptritem.innerHTML = await Detail.render();
        await Detail.afterRender(idresto);
        await Detail.handlerModalClick();
      });
    }
  },
};

export default Restaurant;