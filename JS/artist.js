document.getElementById("global").addEventListener('click', function(){
    document.getElementById("artistimg1").src ='./GG-artist-images/TaylorSwift.jpg';
    document.getElementById("artistimg2").src ='./GG-artist-images/Bad Bunny.jpg';
    document.getElementById("artistimg3").src ='./GG-artist-images/SZA.jpg';
    document.getElementById("artistimg4").src ='./GG-artist-images/Kendrick Lamar.jpg';
    document.getElementById("artistimg5").src ='./GG-artist-images/Morgan Wallen.jpg';
    document.getElementById("artistimg6").src ='./GG-artist-images/Sabrina Carpenter.jpg';
    document.getElementById("artistimg7").src ='./GG-artist-images/Billie Eilish.jpg';
    document.getElementById("artistimg8").src ='./GG-artist-images/Bruno Mars.jpg';
    document.getElementById("artistimg9").src ='./GG-artist-images/Chappell Roan.jpg';
    document.getElementById("artistimg10").src ='./GG-artist-images/Teddy Swims.jpg';

    document.getElementById("artistnm1").innerHTML ='TaylorSwift';
    document.getElementById("artistnm2").innerHTML ='Bad Bunny';
    document.getElementById("artistnm3").innerHTML ='SZA';
    document.getElementById("artistnm4").innerHTML ='Kendrick Lamar';
    document.getElementById("artistnm5").innerHTML ='Morgan Wallen';
    document.getElementById("artistnm6").innerHTML ='Sabrina Carpenter';
    document.getElementById("artistnm7").innerHTML ='Billie Eilish';
    document.getElementById("artistnm8").innerHTML ='Bruno Mars';
    document.getElementById("artistnm9").innerHTML ='Chappell Roan';
    document.getElementById("artistnm10").innerHTML ='Teddy Swims';

    document.getElementById('artistlink1').href = './index.html';
    document.getElementById('artistlink2').href = './index.html';
    document.getElementById('artistlink3').href = './index.html';
    document.getElementById('artistlink4').href = './index.html';
    document.getElementById('artistlink5').href = './index.html';
    document.getElementById('artistlink6').href = './index.html';
    document.getElementById('artistlink7').href = './index.html';
    document.getElementById('artistlink8').href = './index.html';
    document.getElementById('artistlink9').href = './index.html';
    document.getElementById('artistlink10').href = './index.html';
});



document.getElementById("japan").addEventListener('click', function(){
    document.getElementById("artistimg1").src ='./JJ-artist-images/Mrs.GREENAPPLE.jpg';
    document.getElementById("artistimg2").src ='./JJ-artist-images/back number.jpg';
    document.getElementById("artistimg3").src ='./JJ-artist-images/Vaundy.jpg';
    document.getElementById("artistimg4").src ='./JJ-artist-images/YOASOBI.jpg';
    document.getElementById("artistimg5").src ='./JJ-artist-images/Official髭男dism.jpg'
    document.getElementById("artistimg6").src ='./JJ-artist-images/TWICE.jpg';
    document.getElementById("artistimg7").src ='./JJ-artist-images/Ado.jpg';
    document.getElementById("artistimg8").src ='./JJ-artist-images/優里.jpg';
    document.getElementById("artistimg9").src ='./JJ-artist-images/あいみょん.jpg';
    document.getElementById("artistimg10").src ='./JJ-artist-images/RADWIPS.jpg';

    document.getElementById("artistnm1").innerHTML ='Mrs.GREEN APPLE';
    document.getElementById("artistnm2").innerHTML ='back number';
    document.getElementById("artistnm3").innerHTML ='Vaundy';
    document.getElementById("artistnm4").innerHTML ='YOASOBI';
    document.getElementById("artistnm5").innerHTML ='Official髭男dism';
    document.getElementById("artistnm6").innerHTML ='TWICE';
    document.getElementById("artistnm7").innerHTML ='Ado';
    document.getElementById("artistnm8").innerHTML ='優里';
    document.getElementById("artistnm9").innerHTML ='Aimyon';
    document.getElementById("artistnm10").innerHTML ='RADWIPS';

    document.getElementById('artistlink1').href = './index.html';
    document.getElementById('artistlink2').href = './index.html';
    document.getElementById('artistlink3').href = './index.html';
    document.getElementById('artistlink4').href = './index.html';
    document.getElementById('artistlink5').href = './index.html';
    document.getElementById('artistlink6').href = './index.html';
    document.getElementById('artistlink7').href = './index.html';
    document.getElementById('artistlink8').href = './index.html';
    document.getElementById('artistlink9').href = './index.html';
    document.getElementById('artistlink10').href = './index.html';
});

document.getElementById("korea").addEventListener('click', function(){
    document.getElementById("artistimg1").src ='./KK-artist-images/New Jeans.jpg';
    document.getElementById("artistimg2").src ='./KK-artist-images/IU.jpg';
    document.getElementById("artistimg3").src ='./KK-artist-images/aespa.jpg';
    document.getElementById("artistimg4").src ='./KK-artist-images/BTS.jpg';
    document.getElementById("artistimg5").src ='./KK-artist-images/IVE.jpg';
    document.getElementById("artistimg6").src ='./KK-artist-images/DAY6.jpg';
    document.getElementById("artistimg7").src ='./KK-artist-images/BLACKPINK.jpg';
    document.getElementById("artistimg8").src ='./KK-artist-images/ROSÉ.jpg';
    document.getElementById("artistimg9").src ='./KK-artist-images/Lim Young-woong .jpg';
    document.getElementById("artistimg10").src ='./KK-artist-images/Lee Mu-jin.jpg';

    document.getElementById("artistnm1").innerHTML ='New Jeans';
    document.getElementById("artistnm2").innerHTML ='IU';
    document.getElementById("artistnm3").innerHTML ='aespa';
    document.getElementById("artistnm4").innerHTML ='BTS';
    document.getElementById("artistnm5").innerHTML ='IVE';
    document.getElementById("artistnm6").innerHTML ='DAY6';
    document.getElementById("artistnm7").innerHTML ='BLACKPINK';
    document.getElementById("artistnm8").innerHTML ='ROSÉ';
    document.getElementById("artistnm9").innerHTML ='Lim Young-woong';
    document.getElementById("artistnm10").innerHTML ='Lee Mu-jin';

    document.getElementById('artistlink1').href = './index.html';
    document.getElementById('artistlink2').href = './index.html';
    document.getElementById('artistlink3').href = './index.html';
    document.getElementById('artistlink4').href = './index.html';
    document.getElementById('artistlink5').href = './index.html';
    document.getElementById('artistlink6').href = './index.html';
    document.getElementById('artistlink7').href = './index.html';
    document.getElementById('artistlink8').href = './index.html';
    document.getElementById('artistlink9').href = './index.html';
    document.getElementById('artistlink10').href = './index.html';
});




        const listItems = document.querySelectorAll('.artist-country ul li a');

        listItems.forEach(item => {
            item.addEventListener('click', function() {
                listItems.forEach(el => el.classList.remove('text-color', 'global-green')); // Remove the highlight classes from all items
                this.classList.add('text-color'); // Add the highlight class to the clicked item
            });
        });
