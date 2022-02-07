$(document).ready(function () {
  // Controlling the loading screen
  let opacity = 1;

  const interval = setInterval(setOpacity, 1000);
  const interval1 = setInterval(func, 500);

  function setOpacity() {
    opacity = opacity == 1 ? 0 : 1;
    $(".loading").css("opacity", opacity);
  }

  function func() {
    $(".register-flame2").fadeToggle();
  }

  // Scrolling for register disappearing effect
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll > 1200) {
      $(".register-title").css("margin-left", `${scroll - 1200}px`);
      $(".register-button").css("margin-left", `${scroll - 1200 + 5}px`);
    }

    $(".market-body").removeClass("animation-marketbody");
    $(".img-warrior1").removeClass("animation-warrior1");
    $(".img-warrior2").removeClass("animation-warrior2");
    $(".img-warrior3").removeClass("animation-warrior3");
    $(".img-warrior4").removeClass("animation-warrior4");
    $(".marketplace-description").removeClass(
      "animation-marketplace-description"
    );
    $(".marketplace-description1").removeClass(
      "animation-marketplace-description1"
    );
    $(".form-body").removeClass("animation-form-body");
    $(".subscribe-form p").removeClass("animation-subscribe-form-p");
    $(".partner-main").removeClass("animation-partner");
    $(".partner-img-group").removeClass("animation-partner-img-group");
    $(".partner-img-group").removeClass("animation-partner-img-group-up");
    $(".marketplace-description").removeClass(
      "animation-marketplace-description-init"
    );

    if (scroll > 2500) {
      $(".marketplace-description").addClass(
        "animation-marketplace-description-init"
      );
      //   $(".market-body").addClass("animation-marketbody");
    }

    const marketScroll = 3500;

    if (scroll > marketScroll) {
      $(".img-warrior1").addClass("animation-warrior1");
      $(".img-warrior2").addClass("animation-warrior2");
      $(".img-warrior3").addClass("animation-warrior3");
      $(".img-warrior4").addClass("animation-warrior4");
      $(".marketplace-description").addClass(
        "animation-marketplace-description"
      );
      $(".marketplace-description1").addClass(
        "animation-marketplace-description1"
      );
    }

    // if (scroll > 5300) {
    //   $(".partner-main").addClass("animation-partner");
    //   $(".partner-img-group").addClass("animation-partner-img-group");
    // }

    if (scroll > 6000) {
      $(".partner-img-group").addClass("animation-partner-img-group-up");
    }

    // if (scroll > 6300) {
    //   $(".form-body").addClass("animation-form-body");
    //   $(".subscribe-form p").addClass("animation-subscribe-form-p");

    //   // $(".subscribe-send").addClass("animation-subscribe-form-send");
    // }
  });
});
