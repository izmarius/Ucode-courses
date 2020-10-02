// fetch api returns a promise

// async returns a promise
// await waits until the promise is resolved

const getTodosList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  return data;
};

getTodosList()
  .then((data) => {
    console.log("resolved:", data);
  })
  .catch((err) => {
    console.log("rejected:", err.message);
  });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json(); //returns a promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
