"use strict"

function ilerle(){
console.log("ilerleniyor");

}
function gaza_bas(callback)
{

    console.log("gaz veriliyor!");
    callback();

}
gaza_bas(ilerle);


