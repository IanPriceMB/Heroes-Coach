const characters = [
'abathur', 'alarak', 'alexstrasza', 'ana', 'anubarak', 'artanis', 'arthas', 'auriel', 
'azmodan', 'blaze', 'brightwing', 'cassia', 'chen', 'chogall', 'chromie', 'dva', 'deckard',
'dehaka', 'diablo', 'etc', 'falstad', 'fenix', 'garrosh', 'garrosh', 'gazlowe', 'genji', 'greymane',
'guldan', 'hanzo', 'illidan', 'jaina', 'johanna', 'junkrat', 'kaelthas', 'kelthuzad', 'kerrigan',
'kharazim', 'leoric', 'li-li', 'li-ming', 'lt-morales', 'lucio', 'lunara', 'maiev', 'malfurion', 
'malthael', 'medivh', 'muradin', 'murky', 'nazeebo', 'nova', 'probius', 'ragnaros', 'raynor', 
'rehgar', 'rexxar', 'samuro', 'sgt-hammer', 'sonya', 'stiches', 'stukov', 'sylvanas', 'tassadar',
'the-butcher', 'the-lost-vikings', 'thrall', 'tracer', 'tychus', 'tyrael', 'tyrande', 'uther',
'valeera', 'valla', 'varian', 'whitemane', 'xul', 'yrel', 'zagara', 'zarya', 'zeratul', 'zuljin' 
];

for (let i = 0; i<characters.length; i++){
    var newCharacter = $('<img>');
    $(newCharacter).attr('src', 'staticFiles/heroPics/' + characters[i] + '.png');
    $('body').append(newCharacter);
}