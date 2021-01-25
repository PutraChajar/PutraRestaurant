import '../components/ptr-loading.js';
import '../components/ptr-loader.js';

const LoaderInitiator = {
  initLoader({ container, keterangan }) {
    this._container = container;
    this._keterangan = keterangan;
    this._ptrLoaderElement = document.createElement('ptr-loader');
    this._ptrLoaderElement.keterangan = this._keterangan;
    this._container.appendChild(this._ptrLoaderElement);
  },

  removeLoader() {
    this._ptrLoaderElement.remove();
  },

  initLoading({ container }) {
    this._container = container;
    this._ptrLoadingElement = document.createElement('ptr-loading');
    this._container.appendChild(this._ptrLoadingElement);
  },

  removeLoading() {
    this._ptrLoadingElement.remove();
  },
};

export default LoaderInitiator;