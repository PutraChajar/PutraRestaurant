class PtrLoader extends HTMLElement {
    set keterangan(note) {
        this._keterangan = note;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="loader"></div>
            <p class="loader-text2">${this._keterangan}</p>
        `;
    }
}

customElements.define("ptr-loader", PtrLoader);