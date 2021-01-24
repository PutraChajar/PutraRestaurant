import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/ptr-skiplink.js';
import './components/ptr-nav.js';
import './components/ptr-drawer.js';
import './components/ptr-hero.js';
import './components/ptr-content';
import './components/ptr-footer.js';
import './components/ptr-up.js';
import App from './views/app';
import "font-awesome/css/font-awesome.css";

const app = new App({
  button: document.querySelector('#tdrawer'),
  drawer: document.querySelector('ptr-drawer'),
  content: document.querySelector('ptr-content'),
  skiplink: document.querySelector('#skiplink'),
  gotoup: document.querySelector('#gotoup'),
  hei: document.querySelector('#hei'),
  explore: document.querySelector('#explore'),
  ptrnav: document.querySelector('ptr-nav'),
  ptrup: document.querySelector('ptr-up'),
  isscroll: false,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});
 
window.addEventListener('load', () => {
  app.renderPage();
});