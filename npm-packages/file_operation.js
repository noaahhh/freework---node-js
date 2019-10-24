"use strick"
let sey;

const fs = require('fs');

async   function senkron(){

    const file = await fs.appendFile('demo.txt',"helo world\n", (err) =>{

    if (err) {
        throw(err);
    }
    console.log("dosya oluşturuldu!\n");
    
});


    sey = await fs.readFile('demo.txt',(err,data) =>
    
    {
    if (err) {
        console.log("dosya okunamadı");
    }
    console.log(data.toString());
    });


}
senkron();