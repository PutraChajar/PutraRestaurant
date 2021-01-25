const DrawerInitiator = {
  init({ button, drawer, content, skiplink, gotoup, hei, explore, ptrnav, ptrup, amenu, isscroll }) {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop < 70 || document.documentElement.scrollTop < 70) {
        isscroll = false;
        ptrnav.classList.remove('on');
        ptrup.classList.remove('show');
      }
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        isscroll = true;
        ptrnav.classList.add('on');
        ptrup.classList.add('show');
      }
    });

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

    for (let i = 0; i < amenu.length; i++) {
      amenu[i].addEventListener('click', function() {
        if (this.getAttribute('href') == '#/restaurant' || this.getAttribute('href') == '#/favorite') {
          scroll({top: content.offsetTop - 70, behavior: "smooth"});
        }
        for (let i = 0; i < amenu.length; i++) {
          amenu[i].classList.remove('aktif');
        }
        this.classList.add('aktif');
        if (drawer.classList.contains('show')) {
          button.classList.remove('on');
          drawer.classList.remove('show');
        }
      });
    }

    hei.addEventListener('focus', () => {
      button.classList.remove('on');
      drawer.classList.remove('show');
    });

    explore.addEventListener('click', () => {
      scroll({top: content.offsetTop - 70, behavior: "smooth"});
    });

    ptrup.addEventListener('click', () => {
      scroll({top: 0, behavior: "smooth"});
    });

    gotoup.addEventListener('keypress', (event) => {
      event.stopPropagation();
      if (event.keyCode === 13) {
        skiplink.focus();
      }
    });
  },
};

export default DrawerInitiator;