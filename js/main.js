$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /* ************************************ Fixed Header ************************************ */
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  /************************************ Menu ************************************/
  if ($(window).width() <= 991) {
    $(".menu-btn").click(function () {
      $(".menu-overlay").addClass("active").fadeIn(500);
      $(".header-navbar").addClass("active");
      $("body").addClass("overflow");
    });
    $(".menu-close,.menu-overlay").click(function () {
      $(".menu-overlay").fadeOut(500).removeClass("active");
      $(".header-navbar").removeClass("active");
      $(".user-list").fadeOut(500);
      $("body").removeClass("overflow");
    });

    $(".user-btn").click(function () {
      $(".user-list").fadeIn(500);
      $(".menu-overlay").fadeIn(500);
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    effect: "fade",
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });

  /************************************ Blog Slider ************************************/
  var blogSwiper = new Swiper(".blog-slider .swiper", {
    a11y: {
      enabled: false,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".blog-slider .swiper-pagination",
      clickable: true,
    },
  });

  /************************************ Password ************************************/
  $(".toggle-pass").click(function () {
    var input = $(this).siblings("input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  /************************************ Select ************************************/
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "images/flags";
    var $state = $(
      '<span class="country-item"><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }

  $(".country-select").select2({
    templateResult: formatState,
    templateSelection: formatState,
    minimumResultsForSearch: Infinity,
  });

  /************************************ Team Slider ************************************/
  var teamSwiper = new Swiper(".team-slider .swiper", {
    a11y: {
      enabled: false,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".team-slider .swiper-pagination",
      clickable: true,
    },
  });
});
