let arr = [];



for(i = 1; i < Infinity; i++){
var command =  prompt('введите команду');

var words = command.split(', ');

if(command == 'stop'){
    break;
}
else if(words[0] == 'del'){
    arr.splice(arr.indexOf(words[1]));
    console.log(arr);
}if(words[0] == 'add'){
    arr.push(words[1]);
    console.log(arr);
}

}

