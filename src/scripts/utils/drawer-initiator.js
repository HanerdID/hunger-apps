const DrawerInitiator = {
  init({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._handleNavbarList();
    this._initEvents();
  },

  _handleNavbarList() {
    const navbarList = this._drawer;

    const toggleNavbarList = () => {
      if (window.innerWidth < 700) {
        navbarList.classList.remove('open');
      } else {
        navbarList.classList.add('open');
      }
    };

    this._button.addEventListener('click', (event) => {
      this._toggleDrawer(event, navbarList);
    });

    this._content.addEventListener('click', (event) => {
      this._closeDrawer(event, navbarList);
    });

    window.addEventListener('resize', toggleNavbarList);
    toggleNavbarList();
  },

  _initEvents() {
  },

  _toggleDrawer(event, drawer) {
    const drawerElement = drawer;
    drawerElement.classList.toggle('open');
    event.stopPropagation();
  },

  _closeDrawer(event, drawer) {
    const drawerElement = drawer;
    drawerElement.classList.remove('open');
    event.stopPropagation();
  },
};

export default DrawerInitiator;
