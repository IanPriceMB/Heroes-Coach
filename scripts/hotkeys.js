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
// r for red
$(document).on("keypress",function(e) {
    if(e.key == '1') {
        x='purple';
        mode='pen';
    }
});
// r for red
$(document).on("keypress",function(e) {
    if(e.key == '2') {
        x='green';
        mode='pen';
    }
});
// r for red
$(document).on("keypress",function(e) {
    if(e.key == '3') {
        x='pink';
        mode='pen';
    }
});
// r for red
$(document).on("keypress",function(e) {
    if(e.key == '4') {
        x='orange';
        mode='pen';
    }
});
// r for red
$(document).on("keypress",function(e) {
    if(e.key == '5') {
        x='yellow';
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
        document.getElementById("map-list").classList.toggle("show");
    }
});
$(document).on("keypress",function(e) {
    if(e.key == 'c') {
        document.getElementById("sidebar").classList.toggle("show");
    }
});
    // clear hotkeys
    // l for lines
    $(document).on("keypress",function(e) {
        if(e.key == 'l') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
//if ctrl is pressed and a hero is clicked removed that hero from board and append it to it's section
$(document).on("keydown",function(e) {
    if(e.ctrlKey){
        $('.moved').on('click', function(){
            $(this).remove();

            $(this).removeAttr('style')
            if($(this).attr('move-target')=='red'){
                $('#redCharacters').append(this);
                this.className = 'hero'
                let cw = $('.hero').width();
                $(this).children().css({'height':cw+'px'})
                if($(this).attr('id').startsWith('red')){
                    $(this).addClass('redHero')
                }
            } else{
                $('#blueCharacters').append(this);
                this.className = 'hero'
                let cw = $('.hero').width();
                if($(this).attr('id').startsWith('blue')){
                    $(this).addClass('blueHero')
                }
            }
        })
    }
});
// a for about section
$(document).on("keypress",function(e) {
    if(e.key == 'a') {
        if($('.about-div').length == 0){
            $('body').append('<div class="about-div">')
            $('.about-div').append('<p class="about-p">')
            $('.about-p').html(`Hello there, I am MaddBuddha. A Masters division player and shot caller for the team Off-Brand Cereal. I've also coached for several collegiate teams in
            Heroes of the Dorm, League of Legends and DOTA2. I currently offer private lessons, and I thought this tool would be a great way to help my students learn!
            <br>
            <br>
            If you support this project on Patreon I will continue to update it and make it a little better as time goes on. The more money you pledge, the better the updates will be.
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
            $('.hotkey-p').html(`
            <h3>Pen Colors & Eraser</h3>
            Q = Black | W = White | E = Blue | R = Red
            <br><br>
            1 = Purple | 2 = Green | 3 = Pink | 4 = Orange | 5 = Yellow
            <br><br>
            T = Eraser | L = Clear All Lines
            <h3>Hero Control Tools</h3>
            H = Reset All Heroes<br><br>
            Ctrl + Click = Clear Hero From the Board<br><br>
            C = Character Selection Screen
            <h3>Miscellaneous Tools</h3>
            B = Full Clear the Board<br><br>
            M = Maps List<br><br>
            A = About Popout<br><br>
            Z = Hotkeys Popout<br><br>
            `)
            $('.hotkey-div').append('<button class="closeBtn2">')
            $('.closeBtn2').text('close')
        } else {
            $(".hotkey-div").remove();
        }
    }
});

