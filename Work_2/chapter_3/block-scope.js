let age = 30;

if (true) {
    let age = 40;
    console.log('inside 1st scope block: ', age);

    if (true) {
        let age = 50;
        console.log('insside 2nd scope block: ', age);
    }
}

console.log('global scope: ', age);