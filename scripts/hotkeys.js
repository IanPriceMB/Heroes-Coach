// hotkeys for pen colors
// q for black
$(document).on("keypress", function(e) {
    if(e.key == 'q') {
        x='black';
        mode='pen';
    }
});
// w for white
$(document).on("keypress",function(e) {
    if(e.key == 'w') {
        x='white';
        mode='pen';
    }
});
// e for blue
$(document).on("keypress",function(e) {
    if(e.key == 'e') {
        x='blue';
        mode='pen';
    }
});
// r for red
$(document).on("keypress",function(e) {
    if(e.key == 'r') {
        x='red';
        mode='pen';
    }
});
// though this is for the eraser
// t for eraser
$(document).on("keypress",function(e) {
    if(e.key == 't') {
        mode = 'eraser'
    }
});
// hotkeys for dropdowns and pop outs
// m for maps
$(document).on("keypress",function(e) {
    if(e.key == 'm') {
        document.getElementById("maps-list").classList.toggle("show");
    }
});
$(document).on("keypress",function(e) {
    if(e.key == 'c') {
        document.getElementById("sidebar").classList.toggle("show");
    }
});
// a for about section
$(document).on("keypress",function(e) {
    if(e.key == 'a') {
        if($('.about-div').length == 0){
            $('body').append('<div class="about-div">')
            $('.about-div').append('<p class="about-p">')
            $('.about-p').html(`Hello there, I am MaddBuddha, a Masters Division player and shot caller for the team Off-Brand Cereal. I've also coached for several collegiate teams in
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
    }
});
// z for hotkeys
$(document).on("keypress",function(e) {
    if(e.key == 'z') {
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
    }
});

