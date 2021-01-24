import DataSource from '../../data/data-source.js';
import FavoriteIdb from '../../data/favorite-idb.js';
import Message from '../../utils/message-initiator.js';
import "../../components/ptr-modal.js";
import '../../components/ptr-loading.js';
import '../../components/ptr-loader.js';

let currentModal;

const Detail = {
  async render() {
    return `
      <div class="modal" id="detail">
        
      </div>
    `;
  },

  async afterRender(idresto) {
    const dataRestaurant = await DataSource.loadRestaurant(idresto);
    const ptrModalElement = document.createElement('ptr-modal');
    ptrModalElement.restaurant = dataRestaurant;
    const detailContainer = document.querySelector('#detail');
    detailContainer.appendChild(ptrModalElement);
  },

  async handlerModalClick() {
    const modal = document.querySelector('.modal');
    const title = document.querySelector('.title');
    const close_modal = document.querySelector('#close_modal');
    const favorite = document.querySelector('#favorite');
    const icofav = document.querySelector('#icofav');
    const nilai = document.querySelector('.nilai');
    const tab_makanan = document.querySelector('#tab_makanan');
    const tab_minuman = document.querySelector('#tab_minuman');
    const makanan = document.querySelector('#makanan');
    const minuman = document.querySelector('#minuman');
    const div_review = document.querySelector('#div_review');
    const form_review = document.querySelector('#form_review');
    const tambah_review = document.querySelector('#tambah_review');
    const nama = document.querySelector('#nama');
    const review = document.querySelector('#review');
    const daftar_review = document.querySelector('#daftar_review');
    
    title.focus();

    close_modal.addEventListener('click', () => {
      modal.remove();
    });

    favorite.addEventListener('click', async () => {
      let data = {
        id: favorite.getAttribute('idresto'),
        name: favorite.getAttribute('nameresto'),
        rating: favorite.getAttribute('rating'),
        description: favorite.getAttribute('description'),
        city: favorite.getAttribute('city'),
        pictureId: favorite.getAttribute('pictureId'),
      }

      if (await isFavoriteExist(data.id)) {
        await FavoriteIdb.deleteData(data.id);
        icofav.className = '';
        icofav.classList.add('fa', 'fa-heart-o');
      } else {
        await FavoriteIdb.putData(data);
        icofav.className = '';
        icofav.classList.add('fa', 'fa-heart');
      }
    });

    nilai.addEventListener('click', () => {
      modal.scroll({top: 1000, behavior: "smooth"});
    });

    tab_makanan.addEventListener('click', () => {
      tab_makanan.classList.add('active');
      tab_minuman.classList.remove('active');
      makanan.classList.add('active');
      makanan.classList.remove('hide');
      minuman.classList.add('hide');
      minuman.classList.remove('active');
    });
    
    tab_minuman.addEventListener('click', () => {
      tab_minuman.classList.add('active');
      tab_makanan.classList.remove('active');
      minuman.classList.add('active');
      minuman.classList.remove('hide');
      makanan.classList.add('hide');
      makanan.classList.remove('active');
    });

    tambah_review.addEventListener('click', () => {
      div_review.classList.toggle('hide');
      nama.focus();
      modal.scroll({top: 1000, behavior: "smooth"});
    });

    form_review.addEventListener('submit', async (event) => {
      event.preventDefault();

      let data_review = {
        id: idresto,
        name: nama.value,
        review: review.value
      }

      const ptrLoaderElement = document.createElement('ptr-loader');
      ptrLoaderElement.keterangan = 'Sedang mengirim data..';
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurantsContainer.appendChild(ptrLoaderElement);

      try {
        const dataReview = await DataSource.addNewReview(data_review);
        daftar_review.innerHTML = refreshReview(dataReview);
        nama.value = '';
        review.value = '';
        daftar_review.scroll({left: dataReview.customerReviews.length * 1000, behavior: "smooth"});
        div_review.classList.add('hide');
        ptrLoaderElement.remove();
      } catch (error) {
        console.log(error);
        Message.show({
          jenis: 'error', 
          judul: 'Koneksi Gagal', 
          isi: 'Pastikan device anda mendapatkan koneksi internet'
        });
        ptrLoaderElement.remove();
      }
    });
  },
};

export default Detail;