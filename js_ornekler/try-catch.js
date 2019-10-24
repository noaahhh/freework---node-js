"use strict"

let x= "hello";
var y= "hello";  

try {
    if (x==y) {
        throw Error("aynılar");
    }
    else
        console.log("aynı deiller");
} catch (error) {
    console.log(error);
    
}finally
{
    console.log("finally bloğu");
}