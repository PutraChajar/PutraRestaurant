import DataSource from '../../data/data-source.js';
import Detail from './detail.js';
import Message from '../../utils/message-initiator.js';
import Loader from '../../utils/loader-initiator.js';
import "../../components/ptr-item.js";
import "../../components/ptr-empty.js";

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
    const restaurantsContainer = document.querySelector('#restaurants');

    Loader.initLoading({
      container: restaurantsContainer
    });

    try {
      const dataRestaurants = await DataSource.loadRestaurants();
      Loader.removeLoading();
      if (dataRestaurants.length > 0) {
        dataRestaurants.forEach((restaurant) => {
          const ptrItemElement = document.createElement('ptr-item');
          ptrItemElement.data = restaurant;
          restaurantsContainer.appendChild(ptrItemElement);
          restaurantsContainer.style.display = 'grid';
        });
      } else {
        const ptrEmptyElement = document.createElement("ptr-empty");
        ptrEmptyElement.message = 'Data Restoran Tidak Ada';
        restaurantsContainer.appendChild(ptrEmptyElement);
        restaurantsContainer.style.display = 'flex';
      }
    } catch (message) {
      console.log(message);
      Message.show({
        jenis: 'error', 
        judul: 'Koneksi Gagal', 
        isi: 'Pastikan device anda mendapatkan koneksi internet'
      });
      Loader.removeLoading();
      const ptrEmptyElement = document.createElement("ptr-empty");
      ptrEmptyElement.message = 'Data Restoran Tidak Ada';
      restaurantsContainer.appendChild(ptrEmptyElement);
      restaurantsContainer.style.display = 'flex';
    }
  },

  async handlerDetailClick() {
    const detail_resto = document.querySelectorAll('.detail_resto');
    
    for (var i = 0; i < detail_resto.length; i++) {
      detail_resto[i].addEventListener('click', async function() {
        let idresto = this.getAttribute('idresto');
        const ptritem = document.querySelector(`#${idresto}`);
        ptritem.innerHTML = await Detail.render();
        await Detail.afterRender(idresto);
        await Detail.handlerModalClick(idresto);
      });
    }
  },
};

export default Restaurant;