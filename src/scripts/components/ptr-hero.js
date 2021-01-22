import down from '../../public/images/down.png';

class PtrHero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero_text">
                    <h1 class="hero_title" tabindex="0" id="hei">Hey Kamu!</h1>
                    <p class="hero_caption" tabindex="0">Iya kamu, sudah makan belum? kami memiliki daftar restoran untuk referensi tempat kamu makan. tapi bayar sendiri yaa..</p>
                </div>
                <button class="hero_down" id="explore">
                    <img src="${down}" alt="ke daftar restoran" tabindex="0">
                </button>
            </div>
        `;
    }
}

customElements.define('ptr-hero', PtrHero);