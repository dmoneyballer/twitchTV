
$(document).ready(function() {
//   $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
//     console.log('1st call');
//   console.log(data);x
// });
var users=["ESL_SC2", "OgamingSC2", "cretetion","freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
var i =0;
for (var i = 0; i < users.length; i++) {
  $.ajax({
        url:`https://wind-bow.glitch.me/twitch-api/users/${users[i]}`,
        type: 'GET',

        success: (data) => {
          var newId=`result-${data.name}`
          var html=`<div id=${newId}><img style="max-width:40px; height:auto" class="logo"></img>
          <a class="channels" href="https://www.twitch.tv/${data.name}"></a>
          <span class="bio"></span></div>`
          console.log("2nd call");
          console.log(data);
          console.log(newId);
          console.log($("#" + newId +" .logo"));
          $("#listContainer").append(html);
          $(`#${newId} .logo`).attr("src", data.logo);
          $("#" + newId +" .channels").append(data.display_name); //method of dom manipulaion before es6

          // add link to channel with
          //<li><a href =`https://www.twitch.tv/${user}`></a></li>
          // var i =0;
          // for (var i =0; i<data.length; i++)
            // $(#"channels").append(`<li><a href= "#"><a></li>`);
        },
        error: (err) =>{
              console.log(err.responseJSON);
            }
  });
}
});
