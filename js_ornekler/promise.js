"use strict"
//javascript kullanılarak yapılmış bi callback hell
/*
const asenkronfunction = function ( sayi, callback ){
    const sonuc = sayi +5;
    callback(sonuc);
}

asenkronfunction( 5, function(sonuc){
    console.log(sonuc);
    asenkronfunction(10,function(sonuc){
         console.log(sonuc+5);
    })
});

*/ 




const asenkronfunction = (sayi) => {
   return new Promise((resolve, reject) => {
    
    if (sayi===5) {
        resolve("Her sey yolunda!");
        
    }
    else
    reject("bir sorun var!!");
    })
};

asenkronfunction(6)

.then((result) => {
    
    console.log(result);
    return 2;

}).then((result) =>{
    console.log(result);
}).catch((err) => {
    
    console.log(err);
    return 7;
}).then((err) => {
    console.log(err);
});