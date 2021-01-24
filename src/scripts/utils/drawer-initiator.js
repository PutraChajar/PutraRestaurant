const DrawerInitiator = {
  init({ button, drawer, ptrnav, isscroll }) {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      button.classList.toggle('on');
      drawer.classList.toggle('show');
      if (button.classList.contains('on')) {
        ptrnav.classList.add('on');
      } else if (!isscroll) {
        ptrnav.classList.remove('on');
      }
    });

    button.addEventListener('keypress', (event) => {
      event.stopPropagation();
      if (event.keyCode === 13) {
        button.click();
      }
    });
  },
};

export default DrawerInitiator;