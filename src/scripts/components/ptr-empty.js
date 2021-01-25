import empty from '../../public/images/empty.svg';

class PtrEmpty extends HTMLElement {
    set message(dataMessage) {
        this._message = dataMessage;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="empty">
                <img src="${empty}" alt="empty">
                <p>${this._message}</p>
            </div>
        `;
    }
}

customElements.define("ptr-empty", PtrEmpty);