window.addEventListener("DOMContentLoaded", (event) => {
  let triggerSelector = "[data-video-pause='trigger']";

  function pauseAllVideos() {
    localStorage.setItem("videos-paused", "true");
    $("body").addClass("videos-paused");
    $(triggerSelector).addClass("is-paused");
    $(triggerSelector).attr("aria-label", "Play Videos");
    $("video").each(function () {
      if ($(this).closest("[data-exclude-video]").length === 0 || !$(this)[0].hasAttribute("data-exclude-video")) {
        $(this)[0].pause();
      }
    });
  }
  function playAllVideos() {
    localStorage.setItem("videos-paused", "false");
    $("body").removeClass("videos-paused");
    $(triggerSelector).removeClass("is-paused");
    $(triggerSelector).attr("aria-label", "Pause Videos");
    $("video").each(function () {
      if ($(this).closest("[data-exclude-video]").length === 0 || !$(this)[0].hasAttribute("data-exclude-video")) {
        $(this)[0].muted = true;
        $(this)[0].play();
      }
    });
  }

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  function checkMotionPreference() {
    mediaQuery.matches ? pauseAllVideos() : playAllVideos();
  }
  mediaQuery.addEventListener("change", () => {
    checkMotionPreference();
  });

  if (localStorage.getItem("videos-paused") === "true") {
    pauseAllVideos();
  } else if (localStorage.getItem("videos-paused") === "false") {
    playAllVideos();
  } else {
    checkMotionPreference();
  }

  $(document).on("click", triggerSelector, function () {
    $("body").hasClass("videos-paused") ? playAllVideos() : pauseAllVideos();
  });
});
