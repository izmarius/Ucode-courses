// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("callback fired.");
// }, 2000);

// console.log(3);
// console.log(4);


// HTTP Requests
// get response data as json

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
    //   console.log(request.responseText);
    callback(undefined, request.responseText);
    } else if (request.readyState === 4){
    //   console.log("could not fetch data");
    callback('could not fetch data', undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log('callback fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);