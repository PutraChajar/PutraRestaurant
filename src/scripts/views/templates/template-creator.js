const createReviewTemplate = (value) => `
  <div class="item_review">
    <p class="name_review" tabindex="0">${value.name}</p>
    <p class="date_review" tabindex="0">${value.date}</p>
    <p class="isi_review" tabindex="0">${value.review}</p>
  </div>
`;

export default createReviewTemplate;