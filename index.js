function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num -=1;
    }
}

function writeCards (names, birthday) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
    }
    return cards;
}