
const linkAboutMe = document.querySelector('.nav-about-me');
const galleryAboutMe = document.querySelector('.gallery');
linkAboutMe.addEventListener('click', function () {
   linkHandler(galleryAboutMe);
});

const linkResume = document.querySelector('.nav-resume');
const resume = document.querySelector('.resume');
linkResume.addEventListener('click', function () {
   linkHandler(resume);
});

const linkPortfolio = document.querySelector('.nav-portfolio');
const portfolio = document.querySelector('.portfolio');
linkPortfolio.addEventListener('click', function () {
   linkHandler(portfolio);
});

const linkGeneral = document.querySelector('.nav-general');
const generalInformation = document.querySelector('.information-section');
linkGeneral.addEventListener('click', function () {
   linkHandler(generalInformation);
});

function linkHandler(selectedSection) {
   if (selectedSection.classList.contains('visible')) return;
   selectedSection.classList.remove('hide');
   const visible = document.querySelector('.visible');
   visible.classList.add('hide');
   visible.classList.remove('visible');
   selectedSection.classList.add('visible');
};

let photosPreviews = document.querySelectorAll('.gallery__photo-preview img')
let photoPreviewsСomments = document.querySelectorAll('.gallery__photo-preview span')
let photoFullСomment = document.querySelector('.gallery.hide h2'); //изменила название класса, может не работать
let fullPhoto = document.querySelector('.full-photo');
let currentIndexFull = 1; 
let switchPhotoByPreview = function (photoPreview, index, photoPreviewsСomment) {
   photoPreview.addEventListener('click', function () {
      fullPhoto.src = photoPreview.src; 
      photoFullСomment.textContent = photoPreviewsСomment.textContent;
      currentIndexFull = index;
   });
};
for (var i = 0; i < photosPreviews.length; i++) {
   switchPhotoByPreview(photosPreviews[i], i, photoPreviewsСomments[i]);
};


let buttonNext = document.querySelector('.button-next');
let buttonPrevious = document.querySelector('.button-previous');
let changePhotoByButtonNext = function () {
   buttonNext.addEventListener ('click', function () {
      
      currentIndexFull++;
      if (currentIndexFull >= photosPreviews.length) {
         currentIndexFull = 0;
      }
      fullPhoto.src = photosPreviews[currentIndexFull].src;
      photoFullСomment.textContent = photoPreviewsСomments[currentIndexFull].textContent;    
   })
};

let changePhotoByButtonPrevious = function () {
   buttonPrevious.addEventListener('click', function () {
      if (currentIndexFull) {
         fullPhoto.src = photosPreviews[--currentIndexFull].src;
         photoFullСomment.textContent = photoPreviewsСomments[currentIndexFull].textContent;
      };
   })
};

let changePhotoKeydown = function () {
   document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
         if (currentIndexFull) {
            fullPhoto.src = photosPreviews[--currentIndexFull].src;
         };
      }
      if (event.key === 'ArrowRight') {
         currentIndexFull++;
         if (currentIndexFull >= photosPreviews.length) {
            currentIndexFull = 0;
         }
         fullPhoto.src = photosPreviews[currentIndexFull].src;
      }
      photoFullСomment.textContent = photoPreviewsСomments[currentIndexFull].textContent;
   })
};

changePhotoKeydown();
changePhotoByButtonNext();
changePhotoByButtonPrevious();
