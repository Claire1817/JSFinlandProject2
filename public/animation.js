/*$("#op").click(function(){
    $("#card-album").animate({
        opacity: '1',
    });
});*/


function display_list_artist() {
    for(item in artists) {
        $("#listArtist").append($("<li class='nav-item'><a class='nav-link font-navbar' href='#' id='" + artists[item].id_display + "'>" + artists[item].name + "</a></li>"));
        $("#"+artists[item].id_display).on("click" , {artist:artists[item]} ,display_artist);
    }
}

function display_artist(artist) {
    console.log(artist.data.artist);
    loadArtistInfo(artist.data.artist.id_spotify);
}

function display_albums() {

}

function display_album() {

}

function display_song() {

}

display_list_artist();