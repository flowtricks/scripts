document.addEventListener("DOMContentLoaded", function () {
  function smoothScrollWithOffset(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetAttr = targetElement.getAttribute("data-scroll-offset");
      const offset = offsetAttr ? parseInt(offsetAttr) : 0;
      const elementTop =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementTop + offset,
        behavior: "smooth",
      });
    }
  }

  $(document).off("click.wf-scroll");

  $(document).on("click", "a[href^='#']", function (e) {
    $(document).off("click.wf-scroll");
    e.preventDefault();
    const targetId = $(this).attr("href").substring(1);
    smoothScrollWithOffset(targetId);
  });

  function scrollToActiveHash() {
    const hash = window.location.hash.substring(1);
    if (hash) smoothScrollWithOffset(hash);
  }
  scrollToActiveHash();
  Webflow.push(function () {
    scrollToActiveHash();
  });
});
