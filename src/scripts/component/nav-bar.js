class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <!-- Mobile Navigation -->
        <nav class="mobileMenu">
            <div aria-label="logo">Catalog Resto</div>
            <div class="iconMenu" id="menu">
                <button aria-label="button menu dropdown on mobile device" type="button">
                    <span class="fa fa-bars fa-lg"></span>
                </button>
            </div>
        </nav>
        <nav id="drawer" class="mobileNav">
            <ul class="mobileNavlist">
                <li class="mobileNavitem"><a href="#/">Home</a></li>
                <li class="mobileNavitem"><a href="#/favorite">Favorite</a></li>
                <li class="mobileNavitem"><a target="_blank" rel="noopener" href="https://linktr.ee/izdiharalwin">About
                        Us</a></li>
            </ul>
        </nav>

        <!-- Desktop Navigation -->
        <nav class="nav">
            <a class="logo" href="#">Catalog Resto</a>
            <ul class="navlist">
                <li class="navitem"><a href="#/">Home</a></li>
                <li class="navitem"><a href="#/favorite">Favorite</a></li>
                <li class="navitem"><a target="_blank" rel="noopener" href="https://linktr.ee/izdiharalwin">About Us</a>
                </li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('nav-bar', NavBar);