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

  var elePosY1 = (pos1.top - (mediaH*2)),
      elePosY2 = (pos2.top - (mediaH*2)),
      elePosY3 = (pos3.top - (mediaH*2)),
      elePosY3 = (pos4.top - (mediaH*2)),
      elePosY4 = (pos5.top - (mediaH*2));


$(".container").scroll(function() {

    // var height = $(".text").height();

  var value = $(".container").scrollTop();

    console.log (value);
    console.log(elePosY1,elePosY2);

   if (value > elePosY1 && (value < elePosY2)) {
      $(".vids").attr("src", vid1);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=7-POT4Dn7uI" target=”_blank” >[KCON Mexico] BTS-INTRO+Not Today 170330 EP.517</a>');
    }
     if ((value > elePosY2) && (value < elePosY3)) {
      $(".vids").attr("src", vid2);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=JjSEsIzn3B4" target=”_blank” > ATEEZ(에이티즈) WONDERLAND (Color Coded Lyrics Eng/Rom/Han/가사)</a>');
    }

    if  ((value > elePosY3) && (value < elePosY4)) {
      $(".vids").attr("src", vid3);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=2xU2PyI-sEI" target=”_blank” >[ITZY - DALLA DALLA] Debut Stage | M COUNTDOWN 190214 EP.606</a>');
    }

    if  ((value > elePosY4) && (value < elePosY5)) {
      $(".vids").attr("src", vid4);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=HmwgNRwp4JU" target=”_blank” >PRODUCE48 [1회] 첫 도전! 울림(러블리즈)과 WM(오마이걸)의 실력파 연습생!ㅣ울림김수윤, 권은비, 김소희, 김채원, WM이채연, 이승현, 조영인 180615 EP.1</a>');
    }
    if  ((value > elePosY5) && (value < elePosY6)) {
      $(".vids").attr("src", vid5);
      $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=B0OvEOXxLbA" target=”_blank” >H.O.T - 행복(Happiness), MBC Top Music 19970823</a>');
    }

  });


   //    else if (value > elePosY2 && value < elePosY3)
   //      $(".vids").attr("src", vid3);
      // else if (value > elePosY4 && value < elePosY5)
      //    $(".vids").attr("src", vid4);
      // else if (value > elePosY5 && value < elePosY6)
      //   $(".vids").attr("src", vid5);
      // else if (value > elePosY6 && value < elePosY7)
      //    $(".vids").attr("src", vid6);
      // else if (value > elePosY7 && value < elePosY8)
      //   $(".vids").attr("src", vid7);
      // else if (value > elePosY8 && value < elePosY9)
      //    $(".vids").attr("src", vid8);
      // else if (value > elePosY9 && value < elePosY10)
      //   $(".vids").attr("src", vid9;
      // else if (value > elePosY10 && value < elePosY11)
      //    $(".vids").attr("src", vid10);
      // else if (value > elePosY11 && value < elePosY12)
      //   $(".vids").attr("src", vid11;
      // else if (value > elePosY12 && value < elePosY13)
      //    $(".vids").attr("src", vid12);
      // else if (value > elePosY13 && value < elePosY14)
      //   $(".vids").attr("src", vid13;
      // else if (value > elePosY14 && value < elePosY15)
      //    $(".vids").attr("src", vid14);
      // else if (value > elePosY15 && value < elePosY16)
      //   $(".vids").attr("src", vid15;
      // else if (value > elePosY16 && value < elePosY17)
      //    $(".vids").attr("src", vid16);
      // else if (value > elePosY17 && value < elePosY18)
      //   $(".vids").attr("src", vid17;
      // else if (value > elePosY18 && value < elePosY19)
      //    $(".vids").attr("src", vid18);
      // else if (value > elePosY19 && value < elePosY20)
      //    $(".vids").attr("src", vid19);
      // else if (value > elePosY18 && value < elePosY21)
      //    $(".vids").attr("src", vid20);
      // else if (value > elePosY21 && value < elePosY22)
      //   $(".vids").attr("src", vid21;
      // else if (value > elePosY22 && value < elePosY23)
      //    $(".vids").attr("src", vid22);
      // else if (value > elePosY23 && value < elePosY24)
      //   $(".vids").attr("src", vid23;
      // else if (value > elePosY24 && value < elePosY25)
      //    $(".vids").attr("src", vid24);
      // else if (value > elePosY25 && value < elePosY26)
      //   $(".vids").attr("src", vid25;
      // else if (value > elePosY26 && value < elePosY27)
      //    $(".vids").attr("src", vid26);
      // else if (value > elePosY27 && value < elePosY28)
      //   $(".vids").attr("src", vid27;
      // else if (value > elePosY28 && value < elePosY29)
      //    $(".vids").attr("src", vid28);
      // else if (value > elePosY29 && value < elePosY30)
      //    $(".vids").attr("src", vid29);
