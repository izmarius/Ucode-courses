const form = document.querySelector('.sign-up');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,15}$/;
// const username = document.querySelector('#username');


form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    let isPatternValid = false;
    isPatternValid = usernamePattern.test(username);

    feedback.textContent = 'Username is not valid!';
    if (isPatternValid) {
        feedback.textContent = 'Username is valid!';
    }

    setTimeout(() => {
        feedback.textContent = '';
    }, 3000);

    // console.log(username.value);
    // console.log(form.username.value);
});

// const pattern = /^[a-zA-Z]{6,10}$/;
// let result = pattern.test('shaunwhite');
// console.log(result);


form.username.addEventListener('keyup', e => {
    e.target.setAttribute('class', 'error');
    if (usernamePattern.test(e.target.value)) {
        e.target.setAttribute('class', 'success');
    }
});