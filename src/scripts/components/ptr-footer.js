import logo from '../../public/images/logo2.png';

class PtrFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <img src="${logo}" alt="logo putra resto footer" tabindex="0">
            <p tabindex="0">copyright © 2020 - Putra Resto</p>
        `;
    }
}

customElements.define("ptr-footer", PtrFooter);