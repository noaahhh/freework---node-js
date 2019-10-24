"use strict"
 
function  first(callback)
 {
setTimeout(function(){ 
    console.log("birinci");
 callback(third);
},1000);   

}

 function second(callback)
 {
setTimeout(
    function()
    {
    console.log("ikinci");
    callback();
},2000);
 }

 function third()
 {
     setTimeout(function(){ console.log("üçüncü");},3000)
 
}


 first(second);