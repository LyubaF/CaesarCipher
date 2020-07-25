//caesar code

var str_LowerCase = "abcdefghijklmnopqrstuvwxyz";
var str_UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str_Digits = "0123456789";

var offset = 3;

function Shift(dir, val) {

if (str_LowerCase.indexOf(val) >= 0) {
return ConvertChar (str_LowerCase, val, dir);
}  

if (str_UpperCase.indexOf(val) >= 0) {
return ConvertChar (str_UpperCase, val, dir);
}

if (str_Digits.indexOf(val) >= 0) {
return ConvertChar (str_Digits, val, dir);
}

return (val);
}

function TransformText(dir, text) {
var i;
var strRes = '';

for( i = 0; i < text.length; i++) {
strRes = strRes + Shift(dir, text.charAt(i));
}

document.getElementById('result').value = strRes;
}

function ConvertChar (CharSet, val, dir) {
var l;
var r;

l = (offset - dir * offset) / 2;
r = CharSet.length - 1 - ((1 + dir) / 2) * offset;

if ((CharSet.indexOf(val) <= r) && (CharSet.indexOf(val) >= l))  {
return(CharSet.charAt(CharSet.indexOf(val) + (dir * offset)))
} else {
return (CharSet.charAt(CharSet.indexOf(val) + (dir * offset) - (dir * CharSet.length)))
}
} 

