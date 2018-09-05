const mapsArr=
[
    "Alterac_Pass",
    "Battlefield_of_Eternity",
    "Blackhearts_Bay",
    "Braxis_Holdout",
    "Cursed_Hollow",
    "Dragon_Shire",
    "Garden_of_Terror",
    "Haunted_Mines",
    "Infernal_Shrines",
    "Sky_Temple",
    "Tomb_of_the_Spider_Queen",
    "Towers_of_Doom",
    "Volskaya_Foundry",
    "Warhead_Junction"
];
const charactersArr = [
'abathur', 'alarak', 'alexstrasza', 'ana', 'anubarak', 'artanis', 'arthas', 'auriel', 
'azmodan', 'blaze', 'brightwing', 'cassia', 'chen', 'chogall', 'chromie', 'dva', 'deckard',
'dehaka', 'diablo', 'etc', 'falstad', 'fenix', 'garrosh', 'gazlowe', 'genji', 'greymane',
'guldan', 'hanzo', 'illidan', 'jaina', 'johanna', 'junkrat', 'kaelthas', 'kelthuzad', 'kerrigan',
'kharazim', 'leoric', 'li-li', 'li-ming', 'lt-morales', 'lucio', 'lunara', 'maiev', 'malfurion', 
'malthael', 'medivh', 'muradin', 'murky', 'nazeebo', 'nova', 'probius', 'ragnaros', 'raynor', 
'rehgar', 'rexxar', 'samuro', 'sgt-hammer', 'sonya', 'stitches', 'stukov', 'sylvanas', 'tassadar',
'the-butcher', 'the-lost-vikings', 'thrall', 'tracer', 'tychus', 'tyrael', 'tyrande', 'uther',
'valeera', 'valla', 'varian', 'whitemane', 'xul', 'yrel', 'zagara', 'zarya', 'zeratul', 'zuljin' 
];
// some path variables
const mapPath = "staticFiles/mapPics/";
const redPath = 'staticFiles/heroPics/';
const bluePath = 'staticFiles/heroPics/';

$(document).ready(function(){
//filling up the character zones
for (let a = 0; a < charactersArr.length; a++){
    $('#redCharacters').append('<div class="hero redHero" id="red'+charactersArr[a]+'" data-name="red'+charactersArr[a]+'" move-target="red">');
    $('#red'+ charactersArr[a]).append("<img id='redHero"+charactersArr[a]+"' data-name='redHero"+charactersArr[a]+"' move-target='red'>")
    $("#redHero" + charactersArr[a]).attr("src", redPath+charactersArr[a]+'.png');
}
for (let b = 0; b < charactersArr.length; b++){
    $('#blueCharacters').append('<div class="hero blueHero" id="blue'+charactersArr[b]+'" data-name="blue'+charactersArr[b]+'" move-target="blue">');
    $('#blue'+ charactersArr[b]).append("<img id='blueHero"+charactersArr[b]+"' data-name='blueHero"+charactersArr[b]+"' move-target='blue'>")
    $("#blueHero" + charactersArr[b]).attr("src", bluePath+charactersArr[b]+'.png');
}

//populating the map dropdown
for (let c = 0; c < mapsArr.length; c++){
    $("#maps-list").append("<div class='map-name' id='"+mapsArr[c]+"' data-img-src='" + mapPath + mapsArr[c] +".jpg'>")
    $('#'+mapsArr[c]).text(mapsArr[c].replace(/_/g, " "));
}
// on click of the dropdown sections
$('#maps').on('click', function(){
    document.getElementById("maps-list").classList.toggle("show");
})
$('#ddColorsBtn').on('click', function(){
    document.getElementById("colordd").classList.toggle("show");
})
$('#characters').on('click', function(){
    document.getElementById("sidebar").classList.toggle("show");
})
//when you chose the map add it to the screen and match the canvas
var img;
$('.map-name').on('click', function(){
    document.getElementById("maps-list").classList.toggle("show");
    img = new Image();
    img.src = $(this).attr('data-img-src');
    
    $('#map').remove();
    $('#easel').append(img);
    
    img.onload = function() {
        matchCanvas(this);
      }
    
    $('#easel > img').attr("id", 'map')
    $('#map').addClass('map-styling')
})

//some kind info
$('#about').on('click', function(){
    if($('.about-div').length == 0){
        $('body').append('<div class="about-div">')
        $('.about-div').append('<p class="about-p">')
        $('.about-p').html(`Hello there, I am MaddBuddha. A Masters division player and shot caller for the team Off-Brand Cereal. I've also coached for several collegiate teams in
        Heroes of the Dorm, League of Legends and DOTA2. I currently offer private lessons and I thought this was a great way to help my students learn!
        <br>
        <br>
        If you support this project on patreon I will continue to update it and make it a little better every day. The more money you pledge, the better the updates will be.
        I have a lot of plans for the future already! So, if you are really like this tool then please consider supporting the project.
        <br>
        <br>
        Be sure to subscribe to my YouTube channel (<a href=${'https://www.youtube.com/channel/UCaSkA7hiJ4PewjRrFo1IYgg?view_as=subscriber'} target=${'_blank'}>click me!</a>),
        where I post daily content including: coaching videos, solo que VOD's, tournament and league shot calling VOD's, and much more! 
        I hope you enjoy my Heroes of the Storm coaching tool! 
        <br>
        <br>
        I can't recommend the hotkeys section enough! If you plan on using this a lot it's definately worth a look.
        <br>
        <br>
        -Ian 'MaddBuddha' Price
        <br>
        <br>`)
        $('.about-div').append('<button class="closeBtn">')
        $('.closeBtn').text('close')
    } else {
        $(".about-div").remove();
    }
})
$(document).on("click", ".closeBtn", function() {
    $(".about-div").remove();
});
$('#hotkeys').on('click', function(){
    if($('.hotkey-div').length == 0){
        $('body').append('<div class="hotkey-div">')
        $('.hotkey-div').append('<p class="hotkey-p">')
        $('.hotkey-p').html(`Q = Black Pen<br><br>W = White Pen<br><br>E = Blue Pen<br><br>R = Red Pen
        <br>
        <br>
        T = Eraser<br><br>Ctrl+Click = Clear Hero From the Board<br><br>L = Clear All Lines<br><br>H = Reset All Heroes
        <br>
        <br>
        C = Character Selection sScreen<br><br>B = Clear the Board<br><br>M = Maps List<br><br>A = About Popout<br><br>Z = Hotkeys
        <br>
        <br>`)
        $('.hotkey-div').append('<button class="closeBtn2">')
        $('.closeBtn2').text('close')
    } else {
        $(".hotkey-div").remove();
    }
})
$(document).on("click", ".closeBtn2", function() {
    $(".hotkey-div").remove();
});
});
//an extra function for matching the canvas
function matchCanvas(image) {
var myCanvas = document.getElementById("canvas");
myCanvas.width = image.width
myCanvas.height = image.height
init();
}