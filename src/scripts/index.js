import 'regenerator-runtime';
import '../styles/main.css';
import './components/ptr-skiplink.js';
import './components/ptr-nav.js';
import './components/ptr-drawer.js';
import './components/ptr-hero.js';
import './components/ptr-content';
import './components/ptr-footer.js';
import './components/ptr-up.js';
import App from './views/app';

const app = new App({
  button: document.querySelector('#tdrawer'),
  drawer: document.querySelector('ptr-drawer'),
  content: document.querySelector('ptr-content'),
});
 
window.addEventListener('load', () => {
  app.renderPage();
});