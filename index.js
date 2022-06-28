function shout(string)                      {
    return string.toUpperCase();
}
function whisper(string)                    {
    return string.toLowerCase();
}
 
function logShout(string)                   {
    console.log(shout('hello'));
    return string.toUpperCase();
}
function logWhisper(string)                 {
    console.log(whisper('hello'));
    return string.toLowerCase();
}

function sayHiToHeadphonedRoommate(string)  {

console.log(string);
console.log(string.toUpperCase());

    if (string === whisper(string))                         {
        return ('I can\'t hear you!');
    }
    if (string === shout(string))                         {
        return ('YES INDEED!');
    }
    if (string === "Let's have dinner together!")   {
        return ('I would love to!');
    }

} 