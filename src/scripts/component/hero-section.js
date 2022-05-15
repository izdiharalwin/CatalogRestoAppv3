class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <!-- Hero -->
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Catalog Resto Application</h1>
                <p class="hero__tagline">The chief pleasure in eating does not consist in costly seasoning, or exquisite
                    flavor, but in yourself.</p>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-section', HeroSection);