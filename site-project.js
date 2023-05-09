const linkAboutMe = document.querySelector(".navigation__link_about");
const galleryAboutMe = document.querySelector(".gallery");
linkAboutMe.addEventListener("click", function () {
  linkHandler(galleryAboutMe);
});

const linkResume = document.querySelector(".navigation__link_resume");
const resume = document.querySelector(".resume");
linkResume.addEventListener("click", function () {
  linkHandler(resume);
});

const linkPortfolio = document.querySelector(".navigation__link_portfolio");
const portfolio = document.querySelector(".portfolio");
linkPortfolio.addEventListener("click", function () {
  linkHandler(portfolio);
});

const linkGeneral = document.querySelector(".navigation__link_general");
const generalInformation = document.querySelector(".section-general");
linkGeneral.addEventListener("click", function () {
  linkHandler(generalInformation);
});

function linkHandler(selectedSection) {
  if (selectedSection.classList.contains("visibleJS")) return;
  selectedSection.classList.remove("hideJS");
  const visible = document.querySelector(".visibleJS");
  visible.classList.add("hideJS");
  visible.classList.remove("visibleJS");
  selectedSection.classList.add("visibleJS");
}

const photosPreviews = document.querySelectorAll(".gallery__photo-preview img");
const photoPreviewsСomments = document.querySelectorAll(
  ".gallery__photo-preview span"
);
const photoFullСomment = document.querySelector(".gallery.hideJS h2");
const fullPhoto = document.querySelector(".full-photo");
let currentIndexFull = 1;
const switchPhotoByPreview = function (
  photoPreview,
  index,
  photoPreviewsСomment
) {
  photoPreview.addEventListener("click", function () {
    fullPhoto.src = photoPreview.src;
    photoFullСomment.textContent = photoPreviewsСomment.textContent;
    currentIndexFull = index;
  });
};
for (let i = 0; i < photosPreviews.length; i++) {
  switchPhotoByPreview(photosPreviews[i], i, photoPreviewsСomments[i]);
}

const buttonNext = document.querySelector(".gallery__button-next");
const buttonPrevious = document.querySelector(".gallery__button-previous");
const changePhotoByButtonNext = function () {
  buttonNext.addEventListener("click", function () {
    currentIndexFull++;
    if (currentIndexFull >= photosPreviews.length) {
      currentIndexFull = 0;
    }
    fullPhoto.src = photosPreviews[currentIndexFull].src;
    photoFullСomment.textContent =
      photoPreviewsСomments[currentIndexFull].textContent;
  });
};
const changePhotoByButtonPrevious = function () {
  buttonPrevious.addEventListener("click", function () {
    if (currentIndexFull) {
      fullPhoto.src = photosPreviews[--currentIndexFull].src;
      photoFullСomment.textContent =
        photoPreviewsСomments[currentIndexFull].textContent;
    }
  });
};

const changePhotoKeydown = function () {
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      if (currentIndexFull) {
        fullPhoto.src = photosPreviews[--currentIndexFull].src;
      }
    }
    if (event.key === "ArrowRight") {
      currentIndexFull++;
      if (currentIndexFull >= photosPreviews.length) {
        currentIndexFull = 0;
      }
      fullPhoto.src = photosPreviews[currentIndexFull].src;
    }
    photoFullСomment.textContent =
      photoPreviewsСomments[currentIndexFull].textContent;
  });
};

changePhotoKeydown();
changePhotoByButtonNext();
changePhotoByButtonPrevious();
