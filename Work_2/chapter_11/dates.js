const clock = document.querySelector('.clock');

const updateClock = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(updateClock, 1000);