class PtrDrawer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <ul>
                <li><a href="" class="amenu">Home</a></li>
                <li><a href="#/favorite" class="amenu">Favorite</a></li>
                <li><a href="https://www.instagram.com/putrachajar/" target="_blank" class="amenu" rel="noopener">About Us</a></li>
            </ul>
        `;
    }
}

customElements.define('ptr-drawer', PtrDrawer);