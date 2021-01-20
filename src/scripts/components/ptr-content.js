class PtrContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<main></main>`;
    }
}

customElements.define('ptr-content', PtrContent);