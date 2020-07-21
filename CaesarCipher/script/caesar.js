/*//matrix

var streams = [];
var fadeInterval = 1.6;
var symbolSize = 14;

function setup() {
	createCanvas(
		window.innerWidth,
		window.innerHeight
	);
	background(0);

	var x = 0;
	for (var i = 0; i <= width / symbolSize; i++) {
		var stream = new Stream();
		stream.generateSymbols(x, random(-2000, 0));
		streams.push(stream);
		x += symbolSize
	}

	textFont('Consolas');
	textSize(symbolSize);
}	

function draw() {
	background(0, 150);
	streams.forEach(function(stream) {
		stream.render();
	});
}

function Symbol(x, y, speed, first, opacity) {
	this.x = x;
	this.y = y;
	this.value;

	this.speed = speed;
	this.first = first;
	this.opacity = opacity;

	this.switchInterval = round(random(2, 25));

	this.setToRandomSymbol = function() {
		var charType = round(random(0, 5));
		if (frameCount % this.switchInterval == 0) {
			if (charType > 1) {
			// set it to Katakana	
			this.value = String.fromCharCode(
				0x30A0 + floor(random(0, 97))
			);
		}else {
			//set it to number
			this.value = floor(random(0, 100));
		}
	}
}	

this.rain = function() {
	this.y = (this.y >= height) ? 0 : this.y += this.speed;
	}
}

function Stream() {
	this.symbols = [];
	this.totalSymbols = round(random(5, 35));
	this.speed = random(5, 35);

	this.generateSymbols = function(x, y) {
		var opacity = 255;
		var first = round(random(0, 4)) == 1;
		for ( var i = 0; i <= this.totalSymbols; i++) {
			symbol = new Symbol(
				x, 
				y, 
				this.speed,
				first,
				opacity
			);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			opacity -= (255 / this.totalSymbols) / fadeInterval;
			 y -= symbolSize;
			 first = false;
		}
	}

this.render = function() {
	this.symbols.forEach(function(symbol) {
		if (symbol.first) {
			fill(140, 255, 170, symbol.opacity);
		} else {
			fill(0, 255, 70, symbol.opacity);
		}
		text(symbol.value, symbol.x, symbol.y);
		symbol.rain();
		symbol.setToRandomSymbol();
		});
	}
}*/


/*var str_LowerCase = "abcdefghijklmnopqrstuvwxyz";
var str_UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str_Digits = "0123456789";

var offset = 3;

function Shift(direction, val) {
	var l;
	var r;
		
	
	
	if (str_LowerCase.indexOf(val) >= 0) {
		if (direction == 1) {
			l = 0;
			r = str_LowerCase.length - offset - 1;
		} else {
			l = offset;
			r = str_LowerCase.length - 1;
		}
		if ((str_LowerCase.indexOf(val) <= r) && (str_LowerCase.indexOf(val) >= l))  {
			
			return(str_LowerCase.charAt(str_LowerCase.indexOf(val) + (direction * offset)))
		} else {
			return (str_LowerCase.charAt(str_LowerCase.indexOf(val) + (direction * offset) - (direction * str_LowerCase.length)))
		}
	}  

	if (str_UpperCase.indexOf(val) >= 0) {
		if (str_UpperCase.indexOf(val) < (str_UpperCase.length - offset)) {
			return(str_UpperCase.charAt(str_UpperCase.indexOf(val) + offset))
		} else {
			return (str_UpperCase.charAt(str_UpperCase.indexOf(val) + offset - str_UpperCase.length))
		}
	} 
  
	if (str_Digits.indexOf(val) >= 0) {
		if (str_Digits.indexOf(val) < (str_Digits.length - offset)) {
			return(str_Digits.charAt(str_Digits.indexOf(val) + offset))
		} else {
			return (str_Digits.charAt(str_Digits.indexOf(val) + offset - str_Digits.length))
		}
	}

	return (val);

}	


function TransformText(dir, text) {
	var i;
	var result = '';

		//alert(text.indexOf(' '));

	for( i = 0; i < text.length; i++) {
		result = result + Shift(dir, text.charAt(i));
	} 

	document.getElementById('result').value = result;
}*/





// new code ceasar
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

