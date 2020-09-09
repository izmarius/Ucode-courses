const names = ['shaun', 'mike', 'rose'];

for (let i = 0; i < names.length; i++) {
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }
    console.log(scores[i]);
    if (scores[i] === 100) {
        console.log('congrats you won!');
        break;
    }
}