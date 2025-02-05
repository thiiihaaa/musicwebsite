// Start of recentlyHitSongs scrolling// 
document.getElementById('scroll-left',).addEventListener('click',function(){
    document.getElementById('recentlyhitsongs-wrapped').scrollBy({
        left: -500,
        behavior: "smooth",
    });
});
document.getElementById('scroll-right').addEventListener('click',function(){
    document.getElementById('recentlyhitsongs-wrapped').scrollBy({
        left: 500,
        behavior: "smooth",
    })
})
// end of recentlyHitSongs scrolling// 

// Start of LatestSongs scrolling// 
document.getElementById('latestsongs-scroll-left',).addEventListener('click',function(){
    document.getElementById('latestsongs-wrapped').scrollBy({
        left: -500,
        behavior: "smooth",
    });
});
document.getElementById('latestsongs-scroll-right').addEventListener('click',function(){
    document.getElementById('latestsongs-wrapped').scrollBy({
        left: 500,
        behavior: "smooth",
    })
})
// End of LatestSongs scrolling// 

// Start of ArtistPic scrolling// 
document.getElementById('artistpic-scroll-left',).addEventListener('click',function(){
    document.getElementById('topartistpic-wrapped').scrollBy({
        left: -500,
        behavior: "smooth",
    });
});
document.getElementById('artistpic-scroll-right').addEventListener('click',function(){
    document.getElementById('topartistpic-wrapped').scrollBy({
        left: 500,
        behavior: "smooth",
    })
})
// End of ArtistPic scrolling// 

//Artist chart//
document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let atristPhoto = document.getElementById('artistpic1');
    let artistname = document.getElementById('artistname1');
})