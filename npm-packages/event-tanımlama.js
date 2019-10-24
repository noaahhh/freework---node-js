
"use strict"

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

//çalışan olay
eventEmitter.on('event' ,  (object) => 
{
    setTimeout(() => {
  console.log(`merhaba ${object.name} ${object.surname}`)
        
    },2000);
    
 });

//tetikleyici fonksiyon 
eventEmitter.emit('event' , { name:'noaahhh' , surname:'yrdsvn' });