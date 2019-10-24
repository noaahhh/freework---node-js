"use strict"

const fs = require('fs');
const file = 'video.mp4';
const readstream = fs.createReadStream(file);
const writestream = fs.createWriteStream('views/clone_video.mp4');
let progress=0;


    
    fs.stat(file,(err,data)=>{

    const total_data_length= data.size;

    const begin =  readstream.on('data', (chunk)=> {
        progress += chunk.length;
        console.log("verinin %" + Math.round((progress*100)/total_data_length)    +   "'u gönderildi.");
    });

    
    const end = readstream.on('end', () => {

        console.log('veri okunması bitti');
        console.log("toplam data boyutu        :"   +   total_data_length + " Byte")
    });

    const write = readstream.pipe(writestream);
    
    writestream.on('finish',(err) => { 
        if (err) {
            throw err
        }
        console.log("clone lanma tamamlandı.");
        
    } )
})



