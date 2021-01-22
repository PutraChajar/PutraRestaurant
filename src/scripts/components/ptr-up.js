import up from '../../public/images/up.png';

class PtrUp extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <button class="scrollup" id="gotoup">
                <img src="${up}" alt="kembali ke atas" tabindex="0">
            </button>
        `;
    }
}

customElements.define("ptr-up", PtrUp);