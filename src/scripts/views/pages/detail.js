import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import { createRestoDetailTemplate, loader } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import addNewReview from '../../utils/add-new-reviews';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

const Detail = {
  async render() {
    return `
        <div class="load"></div>
        <article class="content">
          <div id="result"></div>
          <div id="likeButtonContainer"></div>
          <div class="customer-reviews">
          <h2 class="add-review_title">Add New Review</h2>
            <div class="review__form">
              <div class="input_form">
                <div class="review_form_name">
                    <label for="name">Name</label><br>
                    <input type="text" name="name" id="reviewerName" placeholder="Input your name" required>
                </div>
                <div class="review_form_content">
                    <label for="content">Review</label><br>
                    <textarea name="content" id="reviewContent" placeholder="Input your review" required></textarea>
                </div>
              </div>
              <button class="submit" id="submit" aria-label="Submit my review">Add Review</submit>
            </div>
          </div>
        </article>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoContainer = document.querySelector('#result');
    const load = document.querySelector('.load');
    const content = document.querySelector('.content');
    content.style.display = 'none';
    load.innerHTML = loader();
    try {
      const restodetail = await RestaurantSource.getRestaurantDetail(url.id);
      restoContainer.innerHTML = createRestoDetailTemplate(restodetail.restaurant);
      addNewReview.post(url);
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        FavoriteRestaurant: FavoriteRestoIdb,
        restaurant: {
          id: restodetail.restaurant.id,
          name: restodetail.restaurant.name,
          address: restodetail.restaurant.address,
          city: restodetail.restaurant.city,
          categories: restodetail.restaurant.categories,
          menus: restodetail.restaurant.menus,
          rating: restodetail.restaurant.rating,
          pictureId: restodetail.restaurant.pictureId,
          description: restodetail.restaurant.description,
          customerReviews: restodetail.restaurant.customerReviews,
        },
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

export default Detail;