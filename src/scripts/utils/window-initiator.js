const WindowInitiator = {
  init({ button, drawer, content, skiplink, gotoup, hei, explore, ptrnav, ptrup, isscroll }) {
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

export default WindowInitiator;