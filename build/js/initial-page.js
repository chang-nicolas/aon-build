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
    // console.log(scroll);
    if (scroll > 1200) {
      $(".register-title").css("margin-left", `${scroll - 1200}px`);
      $(".register-button").css("margin-left", `${scroll - 1200 + 5}px`);
    }
  });
});
