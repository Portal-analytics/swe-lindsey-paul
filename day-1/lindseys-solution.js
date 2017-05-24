var sum = 0;
function add() {
    // var sum = 0;
    for ( var i = 0; i < 1000; i++) {
        if ( i%3 === 0 || i%5===0) {
            sum+= i;
        }
        else {
            sum += 0;
        }
    }
    return sum;
}

add();

console.log(sum);