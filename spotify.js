var accessToken="BQDYcaahWiEm11sKfLC4DmAjFyjrFhVJCrKVQTRhfGFW6hwNcXp52RxNSxIWimFCEEJmlysfugLDw7LveFGBA0QDib1heBdYy2v_DPwA6DB_AB_UNmCxC3GebGbGpIBDGFohjvbVVTm5DpUkC0ZUKRA5nxX7&refresh_token=AQCcpfBfXoEbkFRDj9_PB0bCsCLuAnvjDqIlJxroPYQ8DbdJqMvcuf3UdP-PPc7NUbZLi-QrwDQJ6Fs7oAwghmdtGiCyxPwse3CKGwGR9gMfmX87jzPfc-9udLm6L2XSUSE"
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