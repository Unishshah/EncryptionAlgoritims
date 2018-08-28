function check(){

1 // Inputing the text
     var textw = [];
 textw = document.getElementById('textbox1').value;
    var text = [];
    text = String(textw);
console.log("text is  " +text);
    
    
//var text = ["U","N","I","S","H","U","N","I","S","H"];


2 ///Converting text into binary format
var binarytext1= [];
    var binarytext= [];
    var wer = []
var i;
for (i = 0; i < text.length; i++) {

    binarytext1[i] =  text[i].charCodeAt();
    console.log(binarytext1[i]);
    if(binarytext1[i]<64)
        {
    binarytext[i] = '00' + binarytext1[i].toString(2);
            console.log("00");
        }
    else
        {
             binarytext[i] = '0' + binarytext1[i].toString(2);
            console.log("0");
        }
    //
}
console.log("binarytext is " +binarytext);


var chrtext = []; 
var ch = [];
for (i = 0; i < text.length; i++)
{
    
 ch = binarytext[i].split('');
    var ja = i * 8;
    chrtext[ja] = ch[0];
    chrtext[ja+1] = ch[1];
    chrtext[ja+2] = ch[2];
    chrtext[ja+3] = ch[3];
    chrtext[ja+4] = ch[4];
    chrtext[ja+5] = ch[5];
    chrtext[ja+6] = ch[6];
    chrtext[ja+7] = ch[7];
}
console.log("chrtext is  "+chrtext);


4//Inputing the key
 var keyxx1 = [];
 keyxx1 = document.getElementById('textbox2').value;
    var keyxx = [];
    for( i=0;i<keyxx1.length;i++){
     keyxx[i] =  keyxx1[i];
    }
//var keyxx = ["S","H","A","H"];
console.log("key is  " +keyxx);

//make key equivalent to text size
if(text.length == keyxx.length)
    {
        console.log("text and key are equal");
        var key = keyxx;
    }
else
    {
         console.log("text and key not equal");
         var x = text.length;
        var key1 = [];
  for ( i = 0; i <= x; i++) {
        key1 = key1.concat(keyxx);
    }
       var key = key1.splice(0,text.length); 
    }
 

console.log("key1 is  " +key);

2 ///Converting text into binary format
var binarykey= [];


for (i = 0; i < key.length; i++) {
    binarykey[i] =  '0' + key[i].charCodeAt().toString(2);
}
console.log("binarykey is " +binarykey);


var chr = [];
for (i = 0; i < key.length; i++)
{
    var j = i * 8;
var chx = binarykey[i].split('');
    chr[j] = chx[0];
    chr[j+1] = chx[1];
    chr[j+2] = chx[2];
    chr[j+3] = chx[3];
    chr[j+4] = chx[4];
    chr[j+5] = chx[5];
    chr[j+6] = chx[6];
    chr[j+7] = chx[7];
}
console.log("chr is  "+chr);


//XORing the text and key 

var firsttotal = [];
for (i = 0; i < chr.length; i++)
    {
       
        if(chr[i]==chrtext[i]){ firsttotal[i] = '0';} else { firsttotal[i]= '1';}
        
    }

console.log("xor of key and text total is  "+firsttotal); 

//Entering the second key
 var secondkey = [];
 secondkey = document.getElementById('textbox3').value;
//var secondkey = ["C","S"];
var secondkeyvalue = 0;
for (i = 0; i < secondkey.length; i++) {
    secondkeyvalue = secondkeyvalue +  secondkey[i].charCodeAt();
}
console.log("second key is " +secondkeyvalue);

//Shifting the blocks
    for ( i = 0; i < secondkeyvalue; i++) {
        firsttotal.unshift(firsttotal.pop());
    }
console.log("shift total is " +firsttotal);


// reversing the key

var revtotal = [];
revtotal = chr.reverse();
console.log("reverse key is er  "+revtotal);

//xoring text+key with rev key


var firsttotal1 = [];
for (i = 0; i < revtotal.length; i++)
    {
       
        if(firsttotal[i]==revtotal[i]){ firsttotal1[i] = '0';} else { firsttotal1[i]= '1';}
        
    }
console.log("xor of key and text and revkey total is  "+firsttotal1);


//converting each array into 8 bits

var bar2 = []
var cal2 = firsttotal1.length/8;
for( i=0; i<cal2;i++) {
    bar2[i]= firsttotal1.splice(0,8);
console.log("divided array is  " +bar2[i]);    
}


//converting the array into decimal form


var str31 =[];

for( i=0; i<bar2.length;i++) {
    
    str31[i]= bar2[i].join('');
    console.log("joined " +str31[i]);
}

var digit = [];
for ( i=0;i<bar2.length;i++)
{
 digit[i] = parseInt(str31[i], 2);    
}

console.log("digits are  "+digit);

var chr11 = [];
for ( i=0; i<digit.length; i++){
chr11[i] = String.fromCharCode(digit[i]);
}

console.log("character is  "+chr11);

document.getElementById("ans").innerHTML = "Encrypted text is  <br><br>" +chr11;
    document.getElementById("ans1").innerHTML = "Text is  <br><br>" +text;
    document.getElementById("ans2").innerHTML = "Key 1 is  <br><br>" +keyxx;
    document.getElementById("ans3").innerHTML = "Key 2 is  <br><br>" +secondkey;
    
    return digit;
}

///////////////////////////////////////////////////////////////////////////////////////////////


function check1(){
// Inputing the text
var num = check();
var i;
var binnum = [];
for(i=0;i<num.length;i++)
    {
        if(num[i] < 4)
        {
binnum[i] = '000000' + num[i].toString(2);  
            console.log("in range of 4");
            console.log("bunnum is  "+binnum[i]);
        }
        
        else if(num[i] < 8) 
         {
binnum[i] = '00000' + num[i].toString(2);
             console.log("num is  "+num[i]);
             console.log("in range of 8");
             console.log("bunnum is  "+binnum[i]);
        }
        
        else if (num[i] < 16) 
         {
binnum[i] =  '0000' + num[i].toString(2); 
             console.log("num is  "+num[i]);
             console.log("in range of 16");
              console.log("bunnum is  "+binnum[i]);
        }
        
        else if(num[i] < 32) 
         {
binnum[i] =  '000' + num[i].toString(2); 
             console.log("num is  "+num[i]);
             console.log("in range of 32");
              console.log("bunnum is  "+binnum[i]);
        }
        
        else if(num[i] < 65) 
         {
binnum[i] = '00' + num[i].toString(2);    
             console.log("num is  "+num[i]);
             console.log("in range of 65");
              console.log("bunnum is  "+binnum[i]);
        }
        
        else if(num[i] < 129) 
         {
binnum[i] =  '0' + num[i].toString(2);    
             console.log("num is  "+num[i]);
             console.log("in range of 129");
              console.log("bunnum is  "+binnum[i]);
        }
        else
            {
                binnum[i] =   num[i].toString(2);
            }
        
    }
console.log("bunnum is  "+binnum);

var decchrtext = []; 
var rtz111= num.length 
for (i = 0; i < rtz111; i++)
{
    var jar = i * 8;
var ch111 = binnum[i].split('');
    decchrtext[jar] = ch111[0];
    decchrtext[jar+1] = ch111[1];
    decchrtext[jar+2] = ch111[2];
    decchrtext[jar+3] = ch111[3];
    decchrtext[jar+4] = ch111[4];
    decchrtext[jar+5] = ch111[5];
    decchrtext[jar+6] = ch111[6];
    decchrtext[jar+7] = ch111[7];
}
console.log("chrtext is  " +decchrtext);

    
var keyxx1 = [];
 keyxx1 = document.getElementById('textbox4').value;
    var keyxx = [];
    for( i=0;i<keyxx1.length;i++){
     keyxx[i] =  keyxx1[i];
    }    
////////////////////////////////
//var keyxx = ["S","H","A","H"];
console.log("key is  " +keyxx);

//make key equivalent to text size
if(num.length == keyxx.length)
    {
        console.log("text and key are equal");
        var key = keyxx;
    }
else
    {
         console.log("text and key not equal");
         var x = num.length;
        var key1 = [];
  for ( i = 0; i <= x; i++) {
        key1 = key1.concat(keyxx);
    }
        var key = key1.splice(0,num.length);
    }
 

console.log("text is  " +key);

2 ///Converting text into binary format

var binarykey = [];

for (i = 0; i < key.length; i++) {
    binarykey[i] =  '0' + key[i].charCodeAt().toString(2);
}
console.log("binarykey is " +binarykey);


var chr = [];
for (i = 0; i < key.length; i++)
{
    var j = i * 8;
var chx = binarykey[i].split('');
    chr[j] = chx[0];
    chr[j+1] = chx[1];
    chr[j+2] = chx[2];
    chr[j+3] = chx[3];
    chr[j+4] = chx[4];
    chr[j+5] = chx[5];
    chr[j+6] = chx[6];
    chr[j+7] = chx[7];
}
console.log("chr is  "+chr);

// reversing the key

var revtotal = [];
revtotal = chr.reverse();
console.log("reverse key is  "+revtotal);

//xoring text+revkey 

var firsttotal1 = [];
for (i = 0; i < chr.length; i++)
    {
       
        if(decchrtext[i]==revtotal[i]){ firsttotal1[i] = '0';} else { firsttotal1[i]= '1';}
        
    }
console.log("xor of reverse key and text is  "+firsttotal1);

    
var secondkey = [];
 secondkey = document.getElementById('textbox5').value;    
//var secondkey = ["C","S"];
var secondkeyvalue = 0;
for (i = 0; i < secondkey.length; i++) {
    secondkeyvalue = secondkeyvalue +  secondkey[i].charCodeAt();
}
console.log("second key is " +secondkeyvalue);

//Shifting the blocks
    for ( i = 0; i < secondkeyvalue; i++) {
     firsttotal1.push(firsttotal1.shift());
    }
console.log("total is " +firsttotal1);

    var keyxx1 = [];
 keyxx1 = document.getElementById('textbox4').value;
    var keyxx = [];
    for( i=0;i<keyxx1.length;i++){
     keyxx[i] =  keyxx1[i];
    }   
//var keyxx = ["S","H","A","H"];
console.log("key is  " +keyxx);

//make key equivalent to text size
if(num.length == keyxx.length)
    {
        console.log("text and key are equal");
        var key = keyxx;
    }
else
    {
         console.log("text and key not equal");
         var x = num.length;
        var key1 = [];
  for ( i = 0; i <= x; i++) {
        key1 = key1.concat(keyxx);
    }
        var key = key1.splice(0,num.length);
    }
 

console.log("text is  " +key);
2 ///Converting text into binary format

var binarykey = [];

for (i = 0; i < key.length; i++) {
    binarykey[i] =  '0' + key[i].charCodeAt().toString(2);
}
console.log("binarykey is " +binarykey);


var chr = [];
for (i = 0; i < key.length; i++)
{
    var j = i * 8;
var chx = binarykey[i].split('');
    chr[j] = chx[0];
    chr[j+1] = chx[1];
    chr[j+2] = chx[2];
    chr[j+3] = chx[3];
    chr[j+4] = chx[4];
    chr[j+5] = chx[5];
    chr[j+6] = chx[6];
    chr[j+7] = chx[7];
}
console.log("chr is  "+chr);

var finaltotal1 = [];
for (i = 0; i < chr.length; i++)
    {
       
        if(firsttotal1[i] == chr[i]){ finaltotal1[i] = '0';} else { finaltotal1[i]= '1';}
        
    }
console.log("xor of reverse key+text and key is  "+finaltotal1);

//converting each array into 8 bits

var decsec1 = []
var cal = finaltotal1.length/8;
for( i=0; i<cal;i++) {
    decsec1[i]= finaltotal1.splice(0,8);
console.log("divided array is  " +decsec1[i]);    
}

var str33 =[];

for( i=0; i<decsec1.length;i++) {
    
    str33[i]= decsec1[i].join('');
    console.log("joined " +str33[i]);
}

var decdigit = [];
for ( i=0;i<decsec1.length;i++)
{
 decdigit[i] = parseInt(str33[i], 2);    
}

console.log("characters are  "+decdigit);

var chr11 = [];
for ( i=0; i<decdigit.length; i++){
chr11[i] = String.fromCharCode(decdigit[i]);
}

console.log("character is  "+chr11);
    
document.getElementById("ans6").innerHTML = "Decrypted text is  <br><br>" +chr11;
    document.getElementById("ans5").innerHTML = "Key 1 is  <br><br>" +keyxx;
    document.getElementById("ans4").innerHTML = "Key 2 is  <br><br>" +secondkey; 
    
    
}
