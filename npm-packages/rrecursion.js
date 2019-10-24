let toplam = 0;
let array=[null];
let i=0;

function recursion( sayi1 , sayi2 , sayi3)
{

    if (toplam===0)
    {
         array =[sayi1,sayi2,sayi3];
        
    }
    console.log("ilk array = " + array);

    toplam =array[0]+array[1]+array[2];
 
array[0]=array[1];
array [1] = array [2]; 
array[2] = toplam;

i++;
console.log("son array = " + array);
if (i!==4) {

    return recursion();

    }

}
 
function new_function(){
    console.log("toplam..:" + toplam);
}
recursion(  30 , 45 , 60);

new_function();