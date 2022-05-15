import RestaurantSource from '../../data/resto-source';
import { createRestoItemTemplate, loader } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="load"></div>
        <section class="content">
            <h2 class="explore">Restaurant List</h2>
            <div class="list" id="dataCard"></div>
        </section>
      `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('#dataCard');
    const load = document.querySelector('.load');
    const content = document.querySelector('.content');
    content.style.display = 'none';
    load.innerHTML = loader();
    try {
      const restolist = await RestaurantSource.getRestaurantList();
      restoContainer.innerHTML = '';
      restolist.forEach((resto) => {
        restoContainer.innerHTML += createRestoItemTemplate(resto);
      });
      content.style.display = 'block';
      load.style.display = 'none';
    } catch (err) {
      content.style.display = 'block';
      load.style.display = 'none';
      content.innerHTML = `<b>Error:</b> ${err}`;
    }
  },
};

export default Home;