var vid1 = "vids/video1.mp4",
    vid2 = "vids/video2.mp4",
    vid3 = "vids/video3.mp4",
    vid4 = "vids/video4.mp4",
    vid5 = "vids/video5.mp4";
    // vid4 = "vids/video4.mp4",
    // vid5 = "vids/video5.mp4",
    // vid6 = "vids/video6.mp4",
    // vid7 = "vids/video7.mp4",
    // vid8 = "vids/video8.mp4",
    // vid9 = "vids/video9.mp4",
    // vid10 = "vids/video10.mp4",
    // vid11 = "vids/video11.mp4",
    // vid12 = "vids/video12.mp4",
    // vid13 = "vids/video13.mp4",
    // vid14 = "vids/video14.mp4",
    // vid15 = "vids/video15.mp4",
    // vid16 = "vids/video16.mp4",
    // vid17 = "vids/video17.mp4",
    // vid18 = "vids/video18.mp4",
    // vid19 = "vids/video19.mp4",
    // vid20 = "vids/video20.mp4",
  //
  var pos1 = $(".ref1").position(),
      pos2 = $(".ref2").position(),
      pos3 = $(".ref3").position(),
      pos4 = $(".ref4").position(),
      pos5 = $(".ref5").position();

var mediaH = $(".media").height();
var conH = $(".container").height();


  var elePosY1 = (pos1.top),
      elePosY2 = (pos2.top),
      elePosY3 = (pos3.top),
      elePosY4 = (pos4.top),
      elePosY5 = (pos5.top);



$(".container").scroll(function() {

    // var height = $(".text").height();

  var value = $(".container").scrollTop();

    console.log (value);
    console.log(elePosY1,elePosY2);

  var value = (($(".container").scrollTop())-(elePosY1)+(conH));

   if (value > elePosY1 && (value < elePosY2)) {
      $(".vids").attr("src", vid1);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=7-POT4Dn7uI" target=”_blank” >[KCON Mexico] BTS-INTRO+Not Today 170330 EP.517</a>');
    }
     if (value > elePosY2) {
      $(".vids").attr("src", vid2);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=JjSEsIzn3B4" target=”_blank” > ATEEZ(에이티즈) WONDERLAND (Color Coded Lyrics Eng/Rom/Han/가사)</a>');
    }

    if  (value > elePosY3) {
      $(".vids").attr("src", vid3);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=2xU2PyI-sEI" target=”_blank” >[ITZY - DALLA DALLA] Debut Stage | M COUNTDOWN 190214 EP.606</a>');
    }

    if  (value > elePosY4) {
      $(".vids").attr("src", vid4);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=HmwgNRwp4JU" target=”_blank” >PRODUCE48 [1회] 첫 도전! 울림(러블리즈)과 WM(오마이걸)의 실력파 연습생!ㅣ울림김수윤, 권은비, 김소희, 김채원, WM이채연, 이승현, 조영인 180615 EP.1</a>');
    }
    if  (value > elePosY5) {
      $(".vids").attr("src", vid5);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=B0OvEOXxLbA" target=”_blank” >H.O.T - 행복(Happiness), MBC Top Music 19970823</a>');
    }

    $box = $('.vidsrcs');
    $box.children().each(function(){
      {
        $(this).wrap('<marquee>');
      }

    });

  });
