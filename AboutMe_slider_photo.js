let linkAboutMe = document.querySelector('.nav-about-me');
let informationSection = document.querySelector('.information-section');
let gallery = document.querySelector('.gallery');
linkAboutMe.addEventListener('click', function () {
   informationSection.classList.toggle('hide-element');
   gallery.classList.toggle('hide-element');
});


let photosPreviews = document.querySelectorAll('.gallery__photo-preview img')
let photoPreviewsСomments = document.querySelectorAll('.gallery__photo-preview span')
let photoFullСomment = document.querySelector('.hide-element h2');
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
   fullPhoto.addEventListener('keydown', function (event) {
      if (evt.keyCode === 37) {
      alert('Отменить!')
   }
})
};
changePhotoKeydown();

changePhotoByButtonNext();
changePhotoByButtonPrevious();
