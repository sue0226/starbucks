var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
// 유투브 라이브러리가 찾아서 실행해줌
function onYouTubeIframeAPIReady() {
  // <div id ="player"></div>
  player = new YT.Player('player', {
    videoId: 'An6LvWQuj_8',  //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,  // 자동재생유무
      loop: true,    // 반복재생유무
      playlist: 'An6LvWQuj_8'  // 반복 재생할 유투브 영상 ID 목록
    },
    events: {
      onReady: function (event) {  // 영상이 준비가 되면
        event.target.mute()  // 음소거
      }
    }
  });
}