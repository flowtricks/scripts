document.addEventListener("DOMContentLoaded",function(){function e(e){const t=document.getElementById(e);if(t){const e=t.getAttribute("data-scroll-offset"),o=e?parseInt(e):0,n=t.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:n+o,behavior:"smooth"})}}function t(){const t=window.location.hash.substring(1);t&&e(t)}$(document).off("click.wf-scroll"),$(document).on("click","a[href^='#']",function(o){$(document).off("click.wf-scroll"),o.preventDefault();const n=$(this).attr("href").substring(1);e(n),t()}),t(),Webflow.push(function(){$(document).off("click.wf-scroll"),window.scrollTo(0,0),t()}),window.scrollToActiveHash=function(){t()}})
