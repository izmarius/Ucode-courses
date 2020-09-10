const ul = document.querySelector('.people');

const people = ['mario', 'ken', 'chad', 'luigi'];

let html = ` `;

people.forEach(person => {
    html += `<li>${person}</li>`;
});

ul.innerHTML = html;