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
            $('.about-p').html(`Over Coach is a project I made for my web design class.
            <br>
            <br>
            If you support this project on Patreon I will continue to update it with more content.
            <br>
            <br>
            Check the hotkeys section for a menu of quick actions to improve your experience.
            <br>
            <br>
            I hope you enjoy Over Coach!
            <br>
            <br>
            -Ian Price
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
            B = Clear the Board<br><br>M = Maps List<br><br>A = About Popout<br><br>Z = Hotkeys
            <br>
            <br>`)
            $('.hotkey-div').append('<button class="closeBtn2">')
            $('.closeBtn2').text('close')
        } else {
            $(".hotkey-div").remove();
        }
    }
});

