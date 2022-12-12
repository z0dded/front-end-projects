const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// HTML Variables
const authorPhoto = document.getElementById("author-img-container");
const authorName = document.getElementById("author-name");
const authorJob = document.getElementById("author-job");
const authorWords = document.getElementById("author-words");

// Buttons variables
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const surpriseMeButton = document.getElementById("surprise-me-button");

// Review Number
let reviewNumber = 0;

previousButton.addEventListener("click", () => {
  // Decreases review number
  reviewNumber -= 1;

  // Checks if review number is less than it should be (avoid annoying bug)
  if (reviewNumber <= -1) {
    reviewNumber = reviews.length - 1;
  }

  // Changes the review based on review number variable
  changeReview(reviewNumber);
});

nextButton.addEventListener("click", () => {
  // Increases review number
  reviewNumber += 1;

  // Checks if review number is greater than it should be (avoid annoying bug)
  if (reviewNumber >= reviews.length) {
    reviewNumber = 0;
  }

  // Changes the review based on review number variable
  changeReview(reviewNumber);
});

surpriseMeButton.addEventListener("click", () => {
  let randomReviewNumber = Math.floor(Math.random() * reviews.length);

  changeReview(randomReviewNumber);
});

function changeReview(reviewNumber) {
  authorPhoto.style.backgroundImage = `url(${reviews[reviewNumber].img})`;
  authorName.textContent = reviews[reviewNumber].name;
  authorJob.textContent = reviews[reviewNumber].job;
  authorWords.textContent = reviews[reviewNumber].text;
}
