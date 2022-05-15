import CONFIG from '../../global/config';

const createReviewCard = (data) => {
  let customerReview = '';
  data.forEach((review) => {
    customerReview += `
            <div class="detail_review_item">
              <div class="review__header">
                <p class="review__name">${review.name}</p>
                <p class="review__date">${review.date}</p>
              </div>
              <div class="review__body">
              "${review.review}"
              </div>
            </div>     
        `;
  });
  return customerReview;
};

const createRestoDetailTemplate = (result) => `
    <h2 tabindex="0" class="explore">Detail of ${result.name}</h2>
    <div class="poster__container">
      <div class="poster__restaurant">
        <img class="detail__poster" height="400px" width="100%" src="${CONFIG.BASE_IMAGE_URL}large/${result.pictureId}" alt="restoran ${result.name}">
      </div>
      <div class="short__desc">
        <h3><i class="fa fa-map-marker fa-md" aria-hidden="true"></i><span class="color" aria-label="address at ${result.address}, ${result.city}"> ${result.address}, ${result.city}</span></h3>
        <h3><i class="fa fa-list-alt fa-md" aria-hidden="true"></i><span class="color" aria-label="categories"> ${result.categories.map((category) => `<span class=""> ${category.name}</span>`).join('')}</span></h2>
        <h3><i class="fa fa-star fa-md"> </i><span class="color" aria-label="rating"> ${result.rating}</span></h3>
      </div>
    </div>
    <div class="detail__info">
      <h2>Description</h2>
      <p>${result.description}</p>
      <h2>Menu</h2>
      <div class="menu__list">
        <div class="detail__food">
          <h3>Makanan</h3>
          ${result.menus.foods.map((food) => `<ul><li style="list-style:none;">${food.name}</li></ul>`).join('')}
        </div>
        <div class="detail__drink">
          <h3>Minuman</h3>
          ${result.menus.drinks.map((drink) => `<ul><li style="list-style:none;">${drink.name}</li></ul>`).join('')}
        </div>
      </div>
      <h2>Reviews (${result.customerReviews.length})</h2>
      <div class="detail_review">
      ${createReviewCard(result.customerReviews)}
      </div>
    </div>
`;

const createRestoItemTemplate = (result) => `
    <div class="card">
    <img class="lazyload card_item_img" src="./placeholder.svg" height="200px" width="100%" data-src="${CONFIG.BASE_IMAGE_URL}small/${result.pictureId}" alt="${result.name}" title="${result.name}">
    <div class="city">${result.city}</div>
    <div class="card_item_content">
        <h3 class="card_item_title"><a tabindex="0" href="${`/#/detail/${result.id}`}">${result.name}</a></h3>
        <p class="card_item_rating">
            Rating : <span class="fa fa-star"> </span>
            <span class="card_item_rating_value" aria-label="rating ${result.rating}">${result.rating}</span>
        </p>
        <div class="card_item_desc">${result.description}</div>
    </div>
    </div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
    </button>
`;

const createEmptyFavorite = () => `
  <div class="empty__container">
    <h3>Sorry</h3>
    <p class="empty__message">You haven't added a favorite restaurant yet</p>
    <a href="/">Add Restaurant</a>
  </div>
`;

const loader = () => `
    <div class="loader"></div>
`;

export {
  // export object
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createEmptyFavorite,
  createReviewCard,
  loader,
};