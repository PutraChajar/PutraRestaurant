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
            html += `<span class="item_kategori">${value.name}</span>`;
        });
        return html;
    }

    displayFood() {
        let html = '';
        this._restaurant.menus.foods.forEach((value, index) => {
            html += `<p tabindex="0">${index+1}. ${value.name}</p>`;
        });
        return html;
    }

    displayDrink() {
        let html = '';
        this._restaurant.menus.drinks.forEach((value, index) => {
            html += `<p tabindex="0">${index+1}. ${value.name}</p>`;
        });
        return html;
    }

    displayReview() {
        let html = '';
        this._restaurant.customerReviews.forEach(value => {
            html += `
                <div class="item_review">
                    <p class="name_review" tabindex="0">${value.name}</p>
                    <p class="date_review" tabindex="0">${value.date}</p>
                    <p class="isi_review" tabindex="0">${value.review}</p>
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
            <div class="modal">
                <div class="modal_card">
                    <div class="header">
                        <span class="title">${this._restaurant.name}</span>
                        <span class="close" id="close_modal"><strong>x</strong></span>
                    </div>
                    <div class="body">
                        <div class="kategori">
                            ${this.displayCategory()}
                        </div>
                        <div class="gambar">
                            <img src="${CONFIG.BASE_IMAGE_URL_SMALL + this._restaurant.pictureId}" alt="${this._restaurant.name}" tabindex="0" crossorigin="anonymous">
                            <button class="suka" id="favorite" idresto="${this._restaurant.id}" nameresto="${this._restaurant.name}" rating="${this._restaurant.rating}" pictureId="${this._restaurant.pictureId}" city="${this._restaurant.city}" description="${this._restaurant.description}">
                                <i class="" id="icofav"></i>
                            </button>
                            <span class="nilai">
                                <p tabindex="0">${this._restaurant.rating}</p>
                            </span>
                        </div>
                        <div class="alamat">
                            <p tabindex="0">${this._restaurant.address}</p>
                        </div>
                        <div class="menu_tab">
                            <button class="sub_tab active" id="tab_makanan">Makanan</button>
                            <button class="sub_tab" id="tab_minuman">Minuman</button>
                        </div>
                        <div id="makanan" class="menu_container active">
                            ${this.displayFood()}
                        </div>
                        <div id="minuman" class="menu_container hide">
                            ${this.displayDrink()}
                        </div>
                        <div class="review_title">
                            <p tabindex="0">Review</p>
                        </div>
                        <div class="review">
                            ${this.displayReview()}
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.setIsFavorite();
    }
}

customElements.define("ptr-modal", PtrModal);