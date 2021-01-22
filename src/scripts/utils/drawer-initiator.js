const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      alert('tdrawer');
      // this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      // this._closeDrawer(event, drawer);
      alert('content');
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;