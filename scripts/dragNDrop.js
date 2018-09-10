$(document).ready(function(){
    // establishing variables that we will be using a lot of later on in the code.
    var easel = document.getElementById('easel');

    //creating a set of characters that have red and blue tags for targeting
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

    //pretty sure this just has to exist but i doesn't do anything
    function heroStart(){
        console.log('wheeeee!')
    }

    //get mouse positioning
    function getCanvasCoordinates(event) {
        var x = event.clientX - canvas.getBoundingClientRect().left,
            y = event.clientY - canvas.getBoundingClientRect().top;

        return {x: x, y: y};
        
    }

    // putting it all together
    function heroEnd(event){ 
        hero = $(this).attr('data-name'); 
       $('#redCharacters').children(hero).remove();
       $('#blueCharacters').children(hero).remove();
       
        var position = getCanvasCoordinates(event);
        heroObj[hero] = new OnBoard(this, position)  
        this.className = 'moved';
        if($(this).attr('id').startsWith('red')){
            $(this).addClass('redHero')
        }
        if($(this).attr('id').startsWith('blue')){
            $(this).addClass('blueHero')
        }
        
        //after dynamically creating a hero div that containes personal coordinates for moving around the map
        //palce hero, this reruns every time it is moved
        placeHero(this);
        $(easel).append(this)
    }    
    
    //for dynamically creating heroes obj and the heroes inside of it
    //give coordinates to position
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
    //find the hero you have selected from her
    function placeHero(hero){
        var posX;
        var posY;

        //making sure you are only movig the proper character
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
        
        //attributing the position to the div via inline styleing
        let cw = $('.hero').width()/2;  
        $(hero).attr('style', `position: absolute;top:${posY-cw/2}px;left:${posX-cw/2}px;z-index:3;width:${cw}px; height:${cw}px;`)
        $(hero).children().attr('style', `height:100%;width: 100%;`)
    }

    // clicking the clear heroes button
    $('#clear').on('click', function(){
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
            $('#redCharacters').append('<div class="hero redHero" id="red'+charactersArr[a]+'" data-name="red'+charactersArr[a]+'" move-target="red">');
            $('#red'+ charactersArr[a]).append("<img id='redHero"+charactersArr[a]+"' data-name='redHero"+charactersArr[a]+"' move-target='red'>")
            $("#redHero" + charactersArr[a]).attr("src", redPath+charactersArr[a]+'.png');
        }
    }
    function blueCharactersPop(){
        for (let b = 0; b < charactersArr.length; b++){
            $('#blueCharacters').append('<div class="hero blueHero" id="blue'+charactersArr[b]+'" data-name="blue'+charactersArr[b]+'" move-target="blue">');
            $('#blue'+ charactersArr[b]).append("<img id='blueHero"+charactersArr[b]+"' data-name='blueHero"+charactersArr[b]+"' move-target='blue'>")
            $("#blueHero" + charactersArr[b]).attr("src", bluePath+charactersArr[b]+'.png');
        }
    }
    
    //easier to put some hotkeys here than move all their functions
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
});

