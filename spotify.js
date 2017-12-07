var accessToken ="BQBqFt9-yXyPxTKsvWZmqAioq61-8cyrZWaNuZaNBofHsAD6-FtpZ9RF7UgpyvbTEtvsKJmoMh9d1UBD5LHDmsnZVdfki8XXHrH9YNlg6JOB2NniGGe2InOGn5ltd_cZIzJ5G8oTvTRBVuRlKMaffpl3Vb1y&refresh_token=AQAncj2a2GDK4Kt3ngq2XKXnd1Kcm7Ke2ZrinRHBmwLUQ366cfnLCJZOUu8tU9S5w9vFV1e8HokhIFK5Nbgr43mF5r2tlWbeuO8niUMNQLga3oiNPG5TzB3KkzdxDfJ6CkI"
var spotify_url = "https://api.spotify.com/v1/"

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

function getArtist(value) {
    console.log(value);
    loadArtistInfo(value);
    //   window.location.href="file:///C:/Users/clair/Documents/FinlandeProjet/JSFinlandProjet2/artistDescription.html"
}

$(function(){
    $('li').hover(function(){
         $(this).addClass('highlight');
     }, function(){
         $(this).removeClass('highlight');
     });

     $('li').click(function(){
          $(this).addClass('highlight_stay');
     });
});

function loadArtistInfo(target) {
    console.log(target);
    $.ajax({
        type: "GET",
        url: spotify_url + 'search?q='+target+'&type=artist',
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + accessToken
        },
        sucess: function(resp) {
            console.log(resp);
        },
        failure: function() {
            console.log("FAILURE");
        }})
}