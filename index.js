var birthday = 08111990

var time = Date.now()

var fun = birthday

var funTime = fun + time / Math.random()

console.log(funTime)

var encoded = ''

var encode = funTime.toString()

for (var i = 0, len = encode.length; i < len; i += 1) {
    
    if (encode[i] == 0) {
        encoded += 'o'
    }
    if (encode[i] == 1) {
        encoded += 'i'
    }   
    if (encode[i] == 2) { 
        encoded += 'r'
    }
    if (encode[i] == 3){ 
        encoded += 'e'
    }
    if (encode[i] == 4) {
        encoded += 'a'
    }
    if (encode[i] == 5){
        encoded += 's'
    }
    if (encode[i] == 6) {
        encoded += 'c'
    }
    if (encode[i] == 7) {
        encoded += 'r'
    }
    if (encode[i] == 8) {
        encoded += 'b'
    }
    if (encode[i] == 9) {
        var possible = "abcdefghijklmnopqrstuvwxyz";
        encoded += possible.charAt(Math.floor(Math.random() * possible.length));
    }     
}

console.log(encoded)