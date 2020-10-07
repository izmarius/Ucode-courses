const getStrinWithCapitalLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(getStrinWithCapitalLetter('ana'));

let t = 'ana';
console.log(t.replace(t[0], t[0].toUpperCase()));