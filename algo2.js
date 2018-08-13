function check(){

1 // Inputing the text
  var text = [];
 text = document.getElementById('textbox1').value;
console.log("text is  " +text); 

    
//var text = ["U","N","I","S","H","U","N","I"];
    
//var text = ["qwertuio"];
  //  console.log("text is  " +text)

2 ///Converting text into binary format
var binarytext= [];
var i;
for (i = 0; i < text.length; i++) {
    binarytext[i] =  '0' + text[i].charCodeAt().toString(2);     
}
console.log("binarytext is " +binarytext);

3// swapping within the internal structure
var newbinarytext = [];
var c = [];
for(i=0;i<binarytext.length;i++)
{
c = binarytext[i].split('');
newbinarytext[i] = c[3];
newbinarytext[i] = newbinarytext[i] + c[2];
newbinarytext[i] = newbinarytext[i] + c[1];
newbinarytext[i] = newbinarytext[i] + c[0];
newbinarytext[i] = newbinarytext[i] + c[7];
newbinarytext[i] = newbinarytext[i] + c[6];
newbinarytext[i] = newbinarytext[i] + c[5];
newbinarytext[i] = newbinarytext[i] + c[4];
}
console.log("new binary text is  "+newbinarytext);

var chrtext = []; 
var rtz= text.length ;
for (i = 0; i < rtz; i++)
{
    var ja = i * 8;
var ch = newbinarytext[i].split('');
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
var key = [];
 key = document.getElementById('textbox2').value;
console.log("text is  " +key); 

2 ///Converting text into binary format
var binarykey= [];

for (i = 0; i < key.length; i++) {
    binarykey[i] =  '0' + key[i].charCodeAt().toString(2);     
}
console.log("binarytext is " +binarykey);


var chr = [];
var tr = key.length ;
for (i = 0; i < tr; i++)
{
    var j = i * 8;
var ch = binarykey[i].split('');
    chr[j] = ch[0];
    chr[j+1] = ch[1];
    chr[j+2] = ch[2];
    chr[j+3] = ch[3];
    chr[j+4] = ch[4];
    chr[j+5] = ch[5];
    chr[j+6] = ch[6];
    chr[j+7] = ch[7];
}
console.log("chr is  "+chr);

//XORing the text and key 

var firsttotal = [];
for (i = 0; i < chr.length; i++)
    {
       
        if(chr[i]==chrtext[i]){ firsttotal[i] = '0';} else { firsttotal[i]= '1';}
        
    }

console.log("xor of key and text total is  "+firsttotal);

// reversing the key

var revtotal = [];
revtotal = chr.reverse();
console.log("reverse key is  "+revtotal);

//xoring text+key with rev key

var firsttotal1 = [];
for (i = 0; i < chr.length; i++)
    {
       
        if(firsttotal[i]==revtotal[i]){ firsttotal1[i] = '0';} else { firsttotal1[i]= '1';}
        
    }
console.log("xor of keyand text and revkey total is  "+firsttotal1);
//converting each array into 8 bits

var bar = []
var cal = firsttotal.length/8;
for( i=0; i<cal;i++) {
    bar[i]= firsttotal1.splice(0,8);
console.log("divided array is  " +bar[i]);    
}


//converting the array into decimal form


var str2 = [];
var str3 =[];
var xx = bar.length/8;

for( i=0; i<bar.length;i++) {
    
    str3[i]= bar[i].join('');
    console.log("joined " +str3[i]);
}

var digit = [];
for ( i=0;i<bar.length;i++)
{
 digit[i] = parseInt(str3[i], 2);    
}

console.log("asd  "+digit);


var chr11 = [];
for ( i=0; i<digit.length; i++){
chr11[i] = String.fromCharCode(digit[i]);
}

console.log("character is  "+chr11);
   
    document.getElementById("ans").innerHTML = "Encrypted text is  <br>" +chr11;
    document.getElementById("ans1").innerHTML = "Original text is  <br>" +text;
    document.getElementById("ans2").innerHTML = "Key 1 is  <br>" +key;
    
     return digit;
}

function check1(){

var num = check();

var binnum = [];
for(var i=0;i<num.length;i++)
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

////////////////////////////////
   var deckey = [];
 deckey = document.getElementById('textbox4').value;
console.log("dec key is  " +deckey); 

2 ///Converting text into binary format
var decbinarykey= [];

for (i = 0; i < deckey.length; i++) {
    decbinarykey[i] =  '0' + deckey[i].charCodeAt().toString(2);     
}
console.log("binarytext is " +decbinarykey);
    
//var deckey = ["UNISSHAH","UNISDOTA"];
//console.log("key is  " +deckey);




var decchr = [];
var dectr = deckey.length ;
for (i = 0; i < dectr; i++)
{
    var j = i * 8;
var decch = decbinarykey[i].split('');
    decchr[j] = decch[0];
    decchr[j+1] = decch[1];
    decchr[j+2] = decch[2];
    decchr[j+3] = decch[3];
    decchr[j+4] = decch[4];
    decchr[j+5] = decch[5];
    decchr[j+6] = decch[6];
    decchr[j+7] = decch[7];
}
console.log("key is  "+decchr);

// reversing the key

var decrevtotal = [];
decrevtotal = decchr.reverse();
console.log("reverse key is  "+decrevtotal);

//xoring text and key
var decryptionxor = [];

for(i = 0; i < decchrtext.length; i++)
    {
        if(decrevtotal[i] == decchrtext[i]){
            decryptionxor[i] = '0';
        }
        else{
            decryptionxor[i] = '1';
        }
    }

console.log("decryption total is  " +decryptionxor);


var decchr = [];
var dectr = deckey.length ;
for (i = 0; i < dectr; i++)
{
    var j = i * 8;
var decch = decbinarykey[i].split('');
    decchr[j] = decch[0];
    decchr[j+1] = decch[1];
    decchr[j+2] = decch[2];
    decchr[j+3] = decch[3];
    decchr[j+4] = decch[4];
    decchr[j+5] = decch[5];
    decchr[j+6] = decch[6];
    decchr[j+7] = decch[7];
}
console.log("key is  "+decchr);

//xoring textkey and rev key
var decsec = [];
for (i = 0; i < decchr.length; i++)
    {
       
        if(decryptionxor[i] == decchr[i]){ decsec[i] = '0';} else { decsec[i]= '1';}
        
    }

console.log("second dec total is  " +decsec);


//converting each array into 8 bits

var decsec1 = []
var cal = decsec.length/8;
for( i=0; i<cal;i++) {
    decsec1[i]= decsec.splice(0,8);
console.log("divided array is  " +decsec1[i]);    
}
var str22 = [];
var str333 =[];
var xx = decsec1.length/8;

for( i=0; i<decsec1.length;i++) {
    
    str333[i]= decsec1[i].join('');
    console.log("joined " +str333[i]);
}

var newbinarytextxx = [];
var c = [];
for(i=0;i<num.length;i++)
{
c = str333[i].split('');
newbinarytextxx[i] = c[3];
newbinarytextxx[i] = newbinarytextxx[i] + c[2];
newbinarytextxx[i] = newbinarytextxx[i] + c[1];
newbinarytextxx[i] = newbinarytextxx[i] + c[0];
newbinarytextxx[i] = newbinarytextxx[i] + c[7];
newbinarytextxx[i] = newbinarytextxx[i] + c[6];
newbinarytextxx[i] = newbinarytextxx[i] + c[5];
newbinarytextxx[i] = newbinarytextxx[i] + c[4];
}
console.log("new binary text is  "+newbinarytextxx);

// converting into decimal form



var decdigit = [];
for ( i=0;i<newbinarytextxx.length;i++)
{
 decdigit[i] = parseInt(newbinarytextxx[i], 2);    
}

console.log("asd  "+decdigit);

//converting ascii to letters
var chr11 = [];
for ( i=0; i<decdigit.length; i++){
chr11[i] = String.fromCharCode(decdigit[i]);
}

console.log("character is  "+chr11);
    
    document.getElementById("ans3").innerHTML = "Original text is  <br>" +chr11;
    document.getElementById("ans4").innerHTML = "Key 1 is  <br>" +deckey;

}



