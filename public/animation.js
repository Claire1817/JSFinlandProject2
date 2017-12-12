/*$("#op").click(function(){
    
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

function display_artist_info(artist) {
    showItem("artist_display");
    $("#description_artist_URL").text("Spotify link");
    $("#description_artist_URL").attr("href", artist.external_urls.spotify);
    $("#description_artist_genre").text("Genres : " + artist.genres.join(', '));
    $("#description_artist_followers").text("Followers " + artist.followers.total);
    $("#description_artist_popularity").text("Popularity " + artist.popularity)
    $("#name_artist").text(artist.name);
    $("#photo_artist").attr("src", artist.images[1].url);
    $("#artist_albums").empty();    
    loadArtistAlbum(artist.id);
}

function display_artist_albums(albums) {
    for (item in albums.items) {
        $("#artist_albums").append($("<div id='" + albums.items[item].id + "' class='col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 block_album'><img class='album_image' src='"+ albums.items[item].images[2].url +"'><p class='text-center'>"+ albums.items[item].name +"</p></div>"))
        $("#"+albums.items[item].id).on("click", {album:albums.items[item]}, display_album)
    }
}

function display_album(album) {
    album = album.data.album;
    console.log(album);
    $("#card-album").animate({
        opacity: '1',
    });
    $("#card-album-img").attr("src", album.images[1].url);
    $("#card-album-title").text(album.name);
    loadAlbumTracks(album.id);
}

function display_song(songs) {
    $("#card-album-song").empty();
    for (item in songs.items) {
        $("#card-album-song").append("<li id='" + songs.items[item].id + "' class='list-group-item bg-card font-navbar padding-list'>"+ songs.items[item].name +"</li><iframe src='https://open.spotify.com/embed?uri="+ songs.items[item].uri + "' frameborder='0' allowtransparency='true'></iframe>")
    }
}

function hideItem(id) {
    $("#" + id).hide()
}

function showItem(id) {
    $("#" + id).show();
}

hideItem("artist_display");
hideItem("search_display");

display_list_artist();