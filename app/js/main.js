$(function() {
  $('.hero__slider').slick({
    prevArrow: `<button class="hero__nav hero__nav--prev">
      <img class="hero__arrow hero__arrow--right" src="images/svg/arrow.svg"/>
    </button>`,
    nextArrow: `<button class="hero__nav hero__nav--next">
      <img class="hero__arrow hero__arrow--next" src="images/svg/arrow.svg"/>
    </button>`,
    dots: true,
  });
});