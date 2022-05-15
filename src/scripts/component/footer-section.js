class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Copyright © 2021 - Catalog Resto App</p>
        </footer>
        `;
  }
}

customElements.define('footer-section', FooterSection);