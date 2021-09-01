function strAlphaRemover(s, ind){
    var temp1 = "";
    var temp2 = "";
    if ((typeof s === 'string') && (typeof ind === 'number')){
        temp1 = s.substr(0, ind);
        temp2 = s.substr((ind + 1), s.length);
        return console.log('Result: ' + temp1 + temp2);
    }

    else{
        console.log ("S type: " + typeof s);
        console.log ("ind type: " + typeof ind);
        return console.log ("Please input correct values!");
    }


}
var val = "my anxieties have anxieties.";
strAlphaRemover("my anxieties have anxieties.", 7);