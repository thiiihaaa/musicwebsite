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
    let artistPhoto = document.getElementById('artistpic1');
    let artistName = document.getElementById('artistname1');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/TaylorSwift.jpg';
        artistName.innerHTML = '<a href="#">Taylor Swift</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/Mrs.GREENAPPLE.jpg';
        artistName.innerHTML = '<a href="#">Mrs.GREEN APPLE</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/New Jeans.jpg';
        artistName.innerHTML = '<a href="#">New Jeans</a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic2');
    let artistName = document.getElementById('artistname2');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/Bad Bunny.jpg';
        artistName.innerHTML = '<a href="#">Bad Bunny</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/back number.jpg';
        artistName.innerHTML = '<a href="#">back number</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/IU.jpg';
        artistName.innerHTML = '<a href="#">IU</a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic3');
    let artistName = document.getElementById('artistname3');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/SZA.jpg';
        artistName.innerHTML = '<a href="#">SZA</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/Vaundy.jpg';
        artistName.innerHTML = '<a href="#">Vaundy</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/aespa.jpg';
        artistName.innerHTML = '<a href="#">aespa</a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic4');
    let artistName = document.getElementById('artistname4');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/Kendrick Lamar.jpg';
        artistName.innerHTML = '<a href="#">Kendrick Lamar</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/YOASOBI.jpg';
        artistName.innerHTML = '<a href="#">YOASOBI</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/BTS.jpg';
        artistName.innerHTML = '<a href="#">BTS</a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic5');
    let artistName = document.getElementById('artistname5');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/Morgan Wallen.jpg';
        artistName.innerHTML = '<a href="#">Morgan Wallen</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/Official髭男dism.jpg';
        artistName.innerHTML = '<a href="#">Official髭男dism</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/IVE.jpg';
        artistName.innerHTML = '<a href="#">IVE</a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic6');
    let artistName = document.getElementById('artistname6');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/Sabrina Carpenter.jpg';
        artistName.innerHTML = '<a href="#">Sabrina Carpenter</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/TWICE.jpg';
        artistName.innerHTML = '<a href="#">TWICE</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/DAY6.jpg';
        artistName.innerHTML = '<a href="#">DAY6</a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic7');
    let artistName = document.getElementById('artistname7');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/Billie Eilish.jpg';
        artistName.innerHTML = '<a href="#">Billie Eilish</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/Ado.jpg';
        artistName.innerHTML = '<a href="#">Ado</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/BLACKPINK.jpg';
        artistName.innerHTML = '<a href="#">BLACKPINK</a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic8');
    let artistName = document.getElementById('artistname8');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/Chappell Roan.jpg';
        artistName.innerHTML = '<a href="#">Chappell Roan</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/優里.jpg';
        artistName.innerHTML = '<a href="#">優里</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/ROSÉ.jpg';
        artistName.innerHTML = '<a href="#">ROSÉ</a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic9');
    let artistName = document.getElementById('artistname9');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/Teddy Swims.jpg';
        artistName.innerHTML = '<a href="#">Teddy Swims</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/あいみょん.jpg';
        artistName.innerHTML = '<a href="#">Aimyon</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/Lim Young-woong .jpg';
        artistName.innerHTML = '<a href="#">Lim Young-woong </a>';
    } 
})

document.getElementById('artist-chart').addEventListener('change',function(){
    let selectetValue = this.value;
    let artistPhoto = document.getElementById('artistpic10');
    let artistName = document.getElementById('artistname10');
    if (selectetValue==='Global'){
        artistPhoto.src = 'G-artist-images/Bad Bunny.jpg';
        artistName.innerHTML = '<a href="#">Bad Bunny</a>';
    } else if(selectetValue==='Japan'){
        artistPhoto.src = './J-artist-images/RADWIPS.jpg';
        artistName.innerHTML = '<a href="#">RADWIPS</a>';
    } else if(selectetValue==='Korea'){
        artistPhoto.src = './K-artist-images/Lee Mu-jin.jpg';
        artistName.innerHTML = '<a href="#">Lee Mu-jin</a>';
    } 
})
