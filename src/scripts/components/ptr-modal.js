import CONFIG from '../globals/config.js';
import FavoriteIdb from '../data/favorite-idb.js';

class PtrModal extends HTMLElement {
    set restaurant(dataRestaurant) {
        this._restaurant = dataRestaurant;
        this.render();
    }

    displayCategory() {
        let html = '';
        this._restaurant.categories.forEach(value => {
            html += `<span class="item_kategori">
                        <p tabindex="0" name="kategori">${value.name}</p>
                     </span>`;
        });
        return html;
    }

    displayFood() {
        let html = '';
        this._restaurant.menus.foods.forEach((value, index) => {
            html += `<p tabindex="0" name="nama_makanan">${index+1}. ${value.name}</p>`;
        });
        return html;
    }

    displayDrink() {
        let html = '';
        this._restaurant.menus.drinks.forEach((value, index) => {
            html += `<p tabindex="0" name="nama_minuman">${index+1}. ${value.name}</p>`;
        });
        return html;
    }

    displayReview() {
        let html = '';
        this._restaurant.customerReviews.forEach(value => {
            html += `
                <div class="item_review">
                    <p class="name_review" tabindex="0" name="nama_customer">${value.name}</p>
                    <p class="date_review" tabindex="0" name="tanggal_review">${value.date}</p>
                    <p class="isi_review" tabindex="0" name="isi_review">${value.review}</p>
                </div>
            `;
        });
        return html;
    }

    async setIsFavorite() {
        const icofav = this.querySelector('#icofav');
        const checkData = await FavoriteIdb.getData(this._restaurant.id);
        checkData ? icofav.classList.add('fa', 'fa-heart') : icofav.classList.add('fa', 'fa-heart-o');
    }

    render() {
        this.innerHTML = `
            <div class="modal_card">
                <div class="header">
                    <h2 tabindex="0" class="title" name="nama_restoran">${this._restaurant.name}</h2>
                    <button class="close" id="close_modal" name="tutup_detail_restoran"><i class="fa fa-times"></i></button>
                </div>
                <div class="body">
                    <div class="kategori">
                        ${this.displayCategory()}
                    </div>
                    <div class="gambar">
                        <img src="${CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId}" alt="${this._restaurant.name}" tabindex="0" crossorigin="anonymous">
                        <button class="suka" id="favorite" name="favoritkan" idresto="${this._restaurant.id}" nameresto="${this._restaurant.name}" rating="${this._restaurant.rating}" pictureId="${this._restaurant.pictureId}" city="${this._restaurant.city}" description="${this._restaurant.description}">
                            <i class="" id="icofav"></i>
                        </button>
                        <button class="nilai" name="rating_restoran">
                            ${this._restaurant.rating}
                        </button>
                    </div>
                    <div class="alamat">
                        <p tabindex="0" name="alamat_restoran">${this._restaurant.address}</p>
                    </div>
                    <div class="menu_tab">
                        <button class="sub_tab active" id="tab_makanan" name="menu_makanan">Makanan</button>
                        <button class="sub_tab" id="tab_minuman" name="menu_minuman">Minuman</button>
                    </div>
                    <div id="makanan" class="menu_container active">
                        ${this.displayFood()}
                    </div>
                    <div id="minuman" class="menu_container hide">
                        ${this.displayDrink()}
                    </div>
                    <div class="review_title">
                        <p tabindex="0" name="review_customer">Reviews</p>
                    </div>
                    <div class="review" id="daftar_review">
                        ${this.displayReview()}
                    </div>
                    <div class="review_add">
                        <button class="add_review" id="tambah_review" name="tulis_review">Tulis Review</button>
                    </div>
                    <div class="review_form hide" id="div_review">
                        <form id="form_review" name="form_review" tabindex="0">
                            <div class="form-group">
                                <label for="nama">Nama</label>
                                <input type="text" class="form-control" id="nama" name="nama_anda" autocomplete="off" required>
                            </div>
                            <div class="form-group">
                                <label for="review">Review</label>
                                <textarea id="review" cols="10" rows="5" class="form-control" name="review_anda" required></textarea>
                            </div>
                            <button type="submit" class="btn" name="kirim_review">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        `;

        this.setIsFavorite();
    }
}

customElements.define("ptr-modal", PtrModal);