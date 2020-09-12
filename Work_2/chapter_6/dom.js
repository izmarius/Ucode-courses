const para = document.querySelector(".error");

const paras = document.querySelectorAll("p");

paras.forEach((p) => {
  console.log(p.innerText);
});

const title = document.querySelector("#page-title");

console.log(para);
console.log(paras);
console.log(title);

const content = document.querySelector(".content");

// content.innerHTML = '<h2>thisi a new h2</h2>';
console.log(content.innerHTML);

const people = ["mario", "luigi", "yoshi"];
people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

const mssg = document.querySelector(".error");
// mssg.style.color = 'orange';
// mssg.style.margin = '50px';
// mssg.style.fontSize = '60px';
console.log(mssg.classList);
mssg.classList.add("success");
console.log(mssg.classList);

const article = document.querySelectorAll("article p");
const setMessageState = () => {
  article.forEach((p) => {
    if (p.textContent.includes("error")) p.classList.add("error");
    if (p.textContent.includes("success")) p.classList.add("success");
  });
};
setMessageState();

const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

// removing and creating elements, event bubbling, event delegation

const ul = document.querySelector('ul');
// const items  = document.querySelectorAll('li');
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // e.target.style.textDecoration = 'line-through';
//         // console.log(e.target);
//         console.log('event in LI');
//         e.stopPropagation();
//         e.target.remove();
//     });
// });
ul.addEventListener('click', e => {
    // console.log('event in UL');
    // console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new';
    // ul.append(li);
    ul.prepend(li);
});