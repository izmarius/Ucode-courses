// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("callback fired.");
// }, 2000);

// console.log(3);
// console.log(4);

// HTTP Requests
// get response data as json

const getTodos = (resource) => {
  return new Promise((reseolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        reseolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("todos.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });

// getTodos("https://jsonplaceholder.typicode.com/todos/1", (err, data) => {
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// getTodos("todos.json", (err, data) => {
//   console.log("callback fired");
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// promise example

const getSomething = () => {
  return new Promise((reseolve, reject) => {
    // fetch something
  });
};

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
