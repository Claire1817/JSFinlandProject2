var access_token="BQCUBmC4tFBNJS7AI9iiO912txkmJ3yRJAcIXiEJkfPhB8AMwUfsvDNoUQKt3Q-OyITYuvEilGHfbSBzWZn_fi6ZjpSGH4nCfF300oJJo-ud2Ou24ue4i11DGJChjk3BDipfhhapuu1rD_UA8oQH4zWdRTYD&refresh_token=AQA7hGBnnHfbCK--eDRo4PT3r2yH93llI_3GHjTo_cvsP2bbJR6uCH57P2MdzR_XFCp224yV5Dli18ATHZ5c88dqArBfsp-lkHJj1_CQ8OTYwh6y3kwvEcp81YVMBe2IVAk"

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

var ul_list_artist = document.getElementById('artist_list');
ul_list_artist.onclick = function(event) {
    var target = getEventTarget(event);
    console.log(target);
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
