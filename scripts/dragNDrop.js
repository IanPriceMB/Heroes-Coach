$(document).ready(function(){
    // establishing variables that we will be using a lot of later on in the code.
    var easel = document.getElementById('easel');

    //this is used for validation later
    var allCharacters = [];
    function run(){
        for (i = 0; i < charactersArr.length; i ++){
            allCharacters.push('red' + charactersArr[i])
            allCharacters.push('blue' + charactersArr[i])
        }
    }
    run();

    //giving drag functionality to the heroes
    function dragability(){
        var characters = document.querySelectorAll('.hero');
        for(const character of characters){
            character.addEventListener('dragstart', heroStart)
            character.addEventListener('dragend', heroEnd);
        }
    }
    dragability();

    //pretty sure this just has to exist but i don't need it
    function heroStart(){
        
    }

    //get mouse positioning
    function getCanvasCoordinates(event) {
        var x = event.clientX - canvas.getBoundingClientRect().left,
            y = event.clientY - canvas.getBoundingClientRect().top;

        return {x: x, y: y};
        
    }

    //for dynamically creating heroes obj and the heroes inside of it
    var heroObj ={};
    var hero;
    OnBoard = function (heroDiv, pos){
        //some targeters
        this.name = $(heroDiv).attr('data-name');
        this.id = $(heroDiv).children().attr('data-name');

        //some math for positioning
        this.posX = pos.x;
        this.posY = pos.y;
    }

    // place the hero with it's specific measurements
    function placeHero(hero){
        var posX;
        var posY;
        for (var i = 0; i < allCharacters.length; i++){
            if(allCharacters[i]===$(hero).attr('data-name')){
                for (key in heroObj){
                    if(allCharacters[i] == heroObj[key].name){
                        posX = heroObj[key].posX
                        posY = heroObj[key].posY
                    }
                }
            }
        }
        let cw = $('.hero').width()/2;  
        $(hero).attr('style', `position: absolute;top:${posY-cw/2}px;left:${posX-cw/2}px;z-index:3;width: 2%; height:${cw}px;`)
        $(hero).children().attr('style', `height:${cw}px`)
    }

    // putting it all together
    function heroEnd(event){ 
        hero = $(this).attr('data-name'); 
       $('#redCharacters').children(hero).remove();
       $('#blueCharacters').children(hero).remove();
       
        var position = getCanvasCoordinates(event);
        heroObj[hero] = new OnBoard(this, position)  
        this.className = 'moved'; 
        
        placeHero(this);
        $(easel).append(this)
    }

    // clicking the clear heroes button
    $('#heroes').on('click', function(){
        $('.moved').remove();
        $('#redCharacters').empty();
        $('#blueCharacters').empty();
        redCharactersPop();
        blueCharactersPop();
        dragability();
    })
    //random functions seperated out cause nice
    function redCharactersPop(){
        for (let a = 0; a < charactersArr.length; a++){
            $('#redCharacters').append('<div class="hero" id="red'+charactersArr[a]+'" data-name="red'+charactersArr[a]+'" move-target="red">');
            let cw = $('.hero').width();
            $('#red'+ charactersArr[a]).append("<img id='redHero"+charactersArr[a]+"' data-name='redHero"+charactersArr[a]+"' move-target='red'>")
            $('#redHero'+charactersArr[a]).css({'height':cw+'px'});
            $("#redHero" + charactersArr[a]).attr("src", redPath+charactersArr[a]+'.png');
        }
    }
    function blueCharactersPop(){
        for (let b = 0; b < charactersArr.length; b++){
            $('#blueCharacters').append('<div class="hero" id="blue'+charactersArr[b]+'" data-name="blue'+charactersArr[b]+'" move-target="blue">');
            let cw = $('.hero').width();
            $('#blue'+ charactersArr[b]).append("<img id='blueHero"+charactersArr[b]+"' data-name='blueHero"+charactersArr[b]+"' move-target='blue'>")
            $('#blueHero'+charactersArr[b]).css({'height':cw+'px'});
            $("#blueHero" + charactersArr[b]).attr("src", bluePath+charactersArr[b]+'.png');
        }
    }
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
                } else{
                    $('#blueCharacters').append(this);
                    this.className = 'hero'
                    let cw = $('.hero').width();
                    $(this).children().css({'height':cw+'px'})
                }
            })
        }
    });
    // clear hotkeys
    // l for lines
    $(document).on("keypress",function(e) {
        if(e.key == 'l') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
    // h for heroes
    $(document).on("keypress",function(e) {
        if(e.key == 'h') {
            $('.moved').remove();
            $('#redCharacters').empty();
            $('#blueCharacters').empty();
            redCharactersPop();
            blueCharactersPop();
            dragability();
        }
    });
    // b for board clear
    $(document).on("keypress",function(e) {
        if(e.key == 'b') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            $('.moved').remove();
            $('#redCharacters').empty();
            $('#blueCharacters').empty();
            redCharactersPop();
            blueCharactersPop();
            dragability();
        }
    });

})

