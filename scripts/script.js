const registrationButton = document.querySelectorAll(".login-button");
const popup = document.querySelector(".popup");
const submit = document.querySelector(".login-button_type_popup");
const form = document.querySelector(".popup__form");
const inputForm = document.querySelectorAll(".popup__input");
const membersCard = document.querySelector(".our-team__members");

const slides = document.querySelectorAll(".our-team__member-card");
const points = document.querySelectorAll(".points__point_type_team");
let index = 0;

const images = document.querySelectorAll(".fights__image");
const imagesCard = document.querySelector('.fights__image-wrapper');
const pointsFights = document.querySelectorAll('.points__point_type_fight');
let indexFights = 0;

function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  form.reset();
}

function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
}

for (item of registrationButton) {
  item.addEventListener("click", () => {
    openPopup(popup);
  });
}

submit.addEventListener("click", () => {
  closePopup(popup);
});

//настроил обнуление placeholder
if (inputForm) {
  for (let i = 0; i < inputForm.length; i++) {
    inputForm[i].addEventListener("click", function () {
      const thisElement = this;
      const savePlaceholder = this.getAttribute("placeholder");
      this.setAttribute("placeholder", "");
      document.addEventListener("mouseup", function () {
        thisElement.setAttribute("placeholder", savePlaceholder);
      });
    });
  }
}

//сделал свайпер для карточек шахматистов
const activeSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("our-team__member-card_type_active");
  }
  slides[n].classList.add("our-team__member-card_type_active");
};

const activePointTeam = (n) => {
  for (point of points) {
    point.classList.remove("points__point_active");
  }
  points[n].classList.add("points__point_active");
};

prepareCurrentSlide = (ind) => {
  activeSlide(ind);
  activePointTeam(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

let touchstartX = 0;
let touchendX = 0;

function handleGesture() {
  if (touchendX == touchstartX) return false;
  if (touchendX < touchstartX) {
    nextSlide();
  } else {
    prevSlide();
  }
}

//добавил возможность переключать карточки нажатием на точки
points.forEach((item, indexPoint) =>{
  item.addEventListener('click', () =>{
    index = indexPoint;
    prepareCurrentSlide(index);
  })
})

membersCard.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

membersCard.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});

// //сделал свайпер для картинок
const activeImage = (n) => {
  for (image of images) {
    image.classList.remove("fights__image_type_active");
  }
  images[n].classList.add("fights__image_type_active");
};

const activePointFights = (n) => {
  for (point of pointsFights) {
    point.classList.remove("points__point_active");
  }
  pointsFights[n].classList.add("points__point_active");
};

prepareCurrentImageF = (ind) => {
  activeImage(ind);
  activePointFights(ind);
};

const nextImage = () => {
  if (indexFights == images.length - 1) {
    indexFights = 0;
    prepareCurrentImageF(indexFights);
  } else {
    indexFights++;
    prepareCurrentImageF(indexFights);
  }
};

const prevImage = () => {
  if (indexFights == 0) {
    indexFights = images.length - 1;
    prepareCurrentImageF(indexFights);
  } else {
    indexFights--;
    prepareCurrentImageF(indexFights);
  }
};


function handleGestureF() {
  if (touchendX == touchstartX) return false;
  if (touchendX < touchstartX) {
    nextImage();
  } else {
    prevImage();
  }
}

//добавил возможность переключать карточки нажатием на точки
pointsFights.forEach((item, indexPoint) =>{
  item.addEventListener('click', () =>{
    indexFights = indexPoint;
    prepareCurrentImageF(indexFights);
  })
})

imagesCard.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

imagesCard.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGestureF();
});



