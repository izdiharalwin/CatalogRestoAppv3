import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate, createEmptyFavorite, loader } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="load"></div>
        <article class="content">
          <h2 class="explore">My Favorite Restaurant</h1>
          <div class="list" id="dataCard"></div>
        </article>
      `;
  },

  async afterRender() {
    const favresto = await FavoriteRestoIdb.getAllResto();
    const favrestoContainer = document.querySelector('#dataCard');
    const load = document.querySelector('.load');
    const content = document.querySelector('.content');
    content.style.display = 'none';
    load.innerHTML = loader();

    if (favresto.length === 0) {
      content.innerHTML += createEmptyFavorite();
      content.style.display = 'block';
      load.style.display = 'none';
    } else {
      try {
        favresto.forEach((newResto) => {
          favrestoContainer.innerHTML += createRestoItemTemplate(newResto);
        });
        content.style.display = 'block';
        load.style.display = 'none';
      } catch (err) {
        content.style.display = 'block';
        load.style.display = 'none';
        content.innerHTML = `<b>Error:</b> ${err}`;
      }
    }
  },
};

export default Favorite;