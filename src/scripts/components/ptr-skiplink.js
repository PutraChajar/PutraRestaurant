class PtrSkiplink extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = `
            <a href="#maincontent" class="skip-link" id="skiplink">Menuju ke konten</a>
        `;
    }
}

customElements.define('ptr-skiplink', PtrSkiplink);