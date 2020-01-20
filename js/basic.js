$.bigfoot();


$(document).ready(function(){

      var heightMedia = $(".media").height();
      var containerPos = document.getElementsByClassName("container")[0];
      containerPos.style.height = ($(window).height() - heightMedia - 20);



// FIXME
//       var heightSrcs = $(".vidsrcs").outerHeight();
//       document.getElementsByClassName("bigfoot-footnote__content").style.bottom = 'heightSrcs';
//

    $( "a.table" ).click(function( event ) {

        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});

// function scrollProgress() {
//   var currentState = document.body.scrollTop || document.documentElement.scrollTop;
//   var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrollStatePercentage = (currentState / pageHeight) * 100;
//   document.querySelector(".page-scroll-indicator > .progress").style.width = scrollStatePercentage + "%";
// }
//
// window.onscroll = function () { scrollProgress() };
$( "html,body" ).click(function() {
  var cover = document.getElementsByClassName("cover")[0];
  cover.style.height = "0";
});
