var accessToken ="BQBqFt9-yXyPxTKsvWZmqAioq61-8cyrZWaNuZaNBofHsAD6-FtpZ9RF7UgpyvbTEtvsKJmoMh9d1UBD5LHDmsnZVdfki8XXHrH9YNlg6JOB2NniGGe2InOGn5ltd_cZIzJ5G8oTvTRBVuRlKMaffpl3Vb1y&refresh_token=AQAncj2a2GDK4Kt3ngq2XKXnd1Kcm7Ke2ZrinRHBmwLUQ366cfnLCJZOUu8tU9S5w9vFV1e8HokhIFK5Nbgr43mF5r2tlWbeuO8niUMNQLga3oiNPG5TzB3KkzdxDfJ6CkI"
var spotify_url = "https://api.spotify.com/v1/"
var token = localStorage.getItem("token_spotify") || "";

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

function getArtist(value) {
    console.log(value);
    loadArtistInfo(value);
    //   window.location.href="file:///C:/Users/clair/Documents/FinlandeProjet/JSFinlandProjet2/artistDescription.html"
}

/*$(function(){
    $('li').hover(function(){
         $(this).addClass('highlight');
     }, function(){
         $(this).removeClass('highlight');
     });

     $('li').click(function(){
          $(this).addClass('highlight_stay');
     });
});*/

function loadArtistInfo(target=null) {
    console.log(target);
    $.ajax({
        type: "GET",
        url: spotify_url + 'artists/'+target,
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + token
        },
        success: function(resp) {
            console.log(resp);
            display_artist_info(resp);
        },
        error: function() {
            getToken(loadArtistInfo,target);
        }})
}

function loadArtistAlbum(target=null) {
    $.ajax({
        type: "GET",
        url: spotify_url + 'artists/'+target+'/albums',
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + token
        },
        success: function(resp) {
            console.log(resp);
            display_artist_albums(resp);
        },
        error: function() {
            getToken(loadArtistAlbum,target);
        }})    
}

function loadAlbumTracks(target=null) {
    $.ajax({
        type: "GET",
        url: spotify_url + 'albums/'+target+'/tracks',
        async: false,
        headers: {
            'Authorization' : 'Bearer ' + token
        },
        success: function(resp) {
            console.log(resp);
            display_song(resp);
        },
        error: function() {
            getToken(loadAlbumTracks,target);
        }})    
}

function getToken(callback=null, arg=null) {
    $.ajax({
        type: "GET",
        url: API_ENDPOINT + "/getToken",
        accepts: "application/json; charset=utf-8",
        async: true,
        success: function (resp) {
            token = resp.access_token;
            localStorage.setItem("token_spotify", token);
            if (callback)
                callback(arg);
        },
        failure: function() {
            console.log("FAILURE");
        }
    });
}

$("#op").click(function(){
    loadArtistInfo();
});
