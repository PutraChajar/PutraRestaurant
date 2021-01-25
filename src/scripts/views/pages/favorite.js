import DataSource from '../../data/data-source.js';
import FavoriteIdb from '../../data/favorite-idb.js';
import Detail from './detail.js';
import "../../components/ptr-item.js";
import Message from '../../utils/message-initiator.js';
import Loader from '../../utils/loader-initiator.js';

const Favorite = {
  async render() {
    return `
      <div class="content" id="maincontent">
        <h2 class="content__heading">Restoran Favorit Kamu</h2>
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
      const dataRestaurants = await FavoriteIdb.getAllDatas();
      Loader.removeLoading();
      dataRestaurants.forEach((restaurant) => {
        const ptrItemElement = document.createElement('ptr-item');
        ptrItemElement.data = restaurant;
        restaurantsContainer.appendChild(ptrItemElement);
      });
      scroll({top: restaurantsContainer.offsetTop - 170, behavior: "smooth"});
    } catch (message) {
      console.log(message);
      Message.show({
        jenis: 'error', 
        judul: 'Koneksi Gagal', 
        isi: 'Pastikan device anda mendapatkan koneksi internet'
      });
      Loader.removeLoading();
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

export default Favorite;