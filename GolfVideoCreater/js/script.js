

var sampleVideo = document.getElementById("sampleVideo");

function videoPlay() {
  sampleVideo.play();
  setInterval(updateVariables,10)
  //setInterval(updateParsedJsonVariables,1000)
}

function videoPause() {
  sampleVideo.pause();
}

function videoReset() {
  sampleVideo.pause()
  sampleVideo.currentTime=0;
  sampleVideo.play();
}

var myDistanceId = new Vue({
  el: '#distanceId',
  data: {
      distanceId: 0
  }
})

var myBallSpeedId = new Vue({
  el: '#ballSpeedId',
  data: {
    ballSpeedId: 0
  }
})

var myLaunchAngleId = new Vue({
  el: '#launchAngleId',
  data: {
    launchAngleId: 0
  }
})

var myClubSpeedId = new Vue({
  el: '#clubSpeedId',
  data: {
    clubSpeedId: 0
  }
})

function updateVariables() {
  myDistanceId.distanceId++;
  myBallSpeedId.ballSpeedId++;
  myLaunchAngleId.launchAngleId++;
  myClubSpeedId.clubSpeedId++;
}

/*
function updateParsedJsonVariables() {
  var myVariables = {

}
  myVariables = JSON.parse("myVariables");
}

*/

//worker doesnt need yet
