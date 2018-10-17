export const slideShow = () => {
  let slideIndex = 0;
  const slidesGallery = () => {
    let i;
    const slides = document.querySelectorAll('.images');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(slidesGallery, 3500);
  };
  slidesGallery();
};
