export const settingsSlider = {
  dots: false,
 
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 4,
  arrows: true,
 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.25,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
