import logo from '../../public/images/logo.png';

class PtrNav extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="logo">
                <img src="${logo}" alt="logo putra resto" tabindex="0">
            </div>
            <div class="menu">
                <a href="" class="amenu">Home</a>
                <a href="#/favorite" class="amenu">Favorite</a>
                <a href="https://www.instagram.com/putrachajar/" target="_blank" class="amenu" rel="noopener">About Us</a>
            </div>
            <div class="hamburger" id="tdrawer" tabindex="0">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
    }
}

customElements.define("ptr-nav", PtrNav);