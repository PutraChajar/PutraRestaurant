import createReviewTemplate from '../views/templates/template-creator.js';

const ReviewInitiator = {
  init({ container, data }) {
    let html = ``;
    data.customerReviews.forEach(value => {
      html += createReviewTemplate(value);
    });
    container.innerHTML = html;
  },
};

export default ReviewInitiator;