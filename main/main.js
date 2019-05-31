module.exports = function main(a) {
    console.log("Debug Info");
    var firstLine = [
	            '._.',
	            '...',
	            '._.',
	            '._.',
	            '...',
	            '._.',
	            '._.',
	            '._.',
	            '._.',
	            '._.'
	        ];
	    var secondLine = [
		            '|.|',
		            '..|',
		            '._|',
		            '._|',
		            '|_|',
		            '|_.',
		            '|_.',
		            '..|',
		            '|_|',
		            '|_|'
		        ];
	    var thirdLine = [
		            '|_|',
		            '..|',
		            '|_.',
		            '._|',
		            '..|',
		            '._|',
		            '|_|',
		            '..|',
		            '|_|',
		            '..|'
		        ];
	    let result = '';
	    for (var i = 0; i < a.length; i++) {
		            result += firstLine[parseInt(a[i])];
		    if(i!=a.length-1){
		            result += " ";}
		        }
	    result += "\n";
	    for (var i = 0; i < a.length; i++) {
		            result += secondLine[parseInt(a[i])];
if(i!=a.length-1){
		            result += " ";}
		        }
	    result += "\n";
	    for (var i = 0; i < a.length; i++) {
		            result += thirdLine[parseInt(a[i])];
if(i!=a.length-1){
		            result += " ";}
		        }
	    result += "\n";
	    return result;
};
