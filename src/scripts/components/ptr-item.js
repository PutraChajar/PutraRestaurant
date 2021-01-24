import CONFIG from '../globals/config.js';

class PtrItem extends HTMLElement {
    set data(dataResto) {
        this._data = dataResto;
        this.render();
    }

    displayCaption(string, count) {
        const str = string.split(" ");
        let cap = '';
        for (let i = 0; i < count; i++) {
            if (i !== count-1) {
                cap += str[i] + ' ';
            } else {
                cap += str[i] + '...';
            }
        }
        return cap;
    }

    render() {
        const caption = this.displayCaption(this._data.description, 15);

        this.innerHTML = `
            <div class="item_resto" id="${this._data.id}" idresto="${this._data.id}" tabindex="0">
                <div class="image_resto">
                    <img src="${CONFIG.BASE_IMAGE_URL_SMALL + this._data.pictureId}" alt="${this._data.name}" tabindex="0" crossorigin="anonymous">
                    <span class="kota_resto">
                        <p tabindex="0">${this._data.city}</p>
                    </span>
                </div>
                <div class="desc_resto">
                    <div class="rate_resto">
                        <p tabindex="0">Rating: ${this._data.rating}</p>
                    </div>
                    <div class="name_resto">
                        <h2 tabindex="0">${this._data.name}</h2>
                    </div>
                    <div class="capt_resto">
                        <p tabindex="0">${caption}</p>
                    </div>
                    <div class="cta_resto">
                        <button class="detail_resto" idresto="${this._data.id}">Lihat</button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("ptr-item", PtrItem);