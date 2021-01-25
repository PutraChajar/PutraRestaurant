import WindowInitiator from '../utils/window-initiator.js';
import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';

class App {
  constructor({ button, drawer, content, skiplink, gotoup, hei, explore, ptrnav, ptrup, isscroll }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skiplink = skiplink;
    this._gotoup = gotoup;
    this._hei = hei;
    this._explore = explore;
    this._ptrnav = ptrnav;
    this._ptrup = ptrup;
    this._isscroll = isscroll;

    this._initialAppShell();
  }

  _initialAppShell() {
    WindowInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      skiplink: this._skiplink,
      gotoup: this._gotoup,
      hei: this._hei,
      explore: this._explore,
      ptrnav: this._ptrnav,
      ptrup: this._ptrup,
      isscroll: this._isscroll,
    });

    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      ptrnav: this._ptrnav,
      isscroll: this._isscroll,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    await page.handlerDetailClick();

    if (this._drawer.classList.contains('show')) {
      this._button.classList.remove('on');
      this._drawer.classList.remove('show');
    }
  }
}

export default App;