const title = 'Best reads of 2019';
const authoer = 'Mario';
const likes = 30;

// template string
let resutl = `The blog called ${title} by ${authoer} has ${likes} likes`;
console.log(resutl);


// html template
let html = `
    <h2>${title}</h2>
    <p>By ${authoer}</p>
    <span>This blog has ${likes}</span>
`;
console.log(html);