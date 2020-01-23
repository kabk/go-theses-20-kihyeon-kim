
var el = document.getElementById("nextButton");
if (el.addEventListener) {
    el.addEventListener("click", yourNextFunction, false);
} else {
    el.attachEvent('onclick', yourNextFunction);
}

var video_count =1,
    videoPlayer = document.getElementById("vids");

var tag_count =1,
    tagbox = document.getElementById("vidtag")[0];

function yourNextFunction (){
      video_count++;
      if (video_count == 16) video_count = 1;
      var nextVideo = "vids/video"+video_count+".mp4";
      videoPlayer.src = nextVideo;
      videoPlayer.play();

      tag_count ++;
      if (tag_count == 16) tag_count = 1;
      var nextTag = document.getElementById("")[tag_count-1];
      // tagbox.html = nextTag;
}

var el = document.getElementById("prevButton");
if (el.addEventListener) {
    el.addEventListener("click", yourPrevFunction, false);
} else {
    el.attachEvent('onclick', yourPrevFunction);
}

var video_count =1,
    videoPlayer = document.getElementById("vids");

function yourPrevFunction (){
      video_count--;
      if (video_count == 16) video_count = 1;
      var prevVideo = "vids/video"+video_count+".mp4";
      videoPlayer.src = prevVideo;
      videoPlayer.play();
}



var vid1= $('#vid1').get(0),
    vid2= $('#vid2').get(0),
    vid3= $('#vid3').get(0),
    vid4= $('#vid4').get(0),
    vid5= $('#vid5').get(0);




  // vid2.on('play', function () {
  // $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=Emvjbd3BCs8" target=”_blank” > 창작 안무도 찰떡! 파워풀한 벨기에 대표팀의 ′휘파람(whistle)′♬ 스테이지 K(STAGE K) 8회</a>');
  // })

  // if (!vid1.paused && !vid1.ended) {
  //   $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=7-POT4Dn7uI" target=”_blank” >[KCON Mexico] BTS-INTRO+Not Today 170330 EP.517</a>');
  // }
  // if (!vid2.paused && !vid2.ended) {
  //       $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=Emvjbd3BCs8" target=”_blank” > 창작 안무도 찰떡! 파워풀한 벨기에 대표팀의 ′휘파람(whistle)′♬ 스테이지 K(STAGE K) 8회</a>');
  //
  // }
  // if (!vid3.paused && !vid3.ended) {
  //   $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=kKo9xbN8zR0" target=”_blank” >GOTOE-S KPOP RANDOM PLAY DANCE in Koln-Germany with HISTORY OF KPOP - dress code RED</a>');
  // }
  // if (!vid4.paused && !vid4.ended) {
  //   $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=2xU2PyI-sEI" target=”_blank” > [ITZY - DALLA DALLA] Debut Stage | M COUNTDOWN 190214 EP.606</a>');
  // }
  // if (!vid5.paused && !vid5.ended) {
  //     $('.vidsrcs').html('<a href="https://www.youtube.com/watch?v=HmwgNRwp4JU" target=”_blank” > PRODUCE48 [1회] 첫 도전! 울림(러블리즈)과 WM(오마이걸)의 실력파 연습생!ㅣ울림김수윤, 권은비, 김소희, 김채원, WM이채연, 이승현, 조영인 180615 EP.1</a>');
  // }



$box = $('#vidtag');

$box.children().each(function(){
    {
      $(this).wrap('<marquee>');
    }
  });
