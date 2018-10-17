export const showServices = () => {
  const aboutUs = document.querySelector('.about-us');
  window.addEventListener('scroll', () => {
    if (window.scrollY > aboutUs.offsetTop) {
      document.querySelector('.show-on-scroll').style.display = 'block';
    }
  });
};
