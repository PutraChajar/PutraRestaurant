class PtrLoading extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="loader"></div>
            <p class="loader-text">Sedang mengambil data..</p>
        `;
    }
}

customElements.define("ptr-loading", PtrLoading);