// JavaScript Document

/*ALL*/



/* INDEX.HTML */
/* Text typing */
$(function() {
  $(".p2").typed({
    strings: ["creative", "strategist", "marketer"],
    typeSpeed: 40,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: true
  });
});

/* PORTFOLIO.HTML */

  /*----------------------------------------------------*/
  /*  Isotope Fillter js
    /*----------------------------------------------------*/
  $(window).on("load", function() {
    $(".projects_fillter ul li").on("click", function() {
      $(".projects_fillter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data
      });
    });

    if (document.getElementById("work")) {
      var $workGrid = $(".projects_inner").isotope({
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-sizer"
        }
      });
    }
  });

/*Enable tooltips*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* PORTFOLIO / MISS MACAROON BLOG */
/* Tabs */

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
