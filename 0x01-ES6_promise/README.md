# JS ES6 Promises

ES6 Promises are a way to handle asynchronous code in JavaScript. They provide a more powerful alternative to traditional callback functions and make it easier to write and reason about asynchronous code.

## How do Promises work?

A Promise represents the result of an asynchronous operation. It can be in one of three states:

  *  Pending: The asynchronous operation is ongoing.
  *  Fulfilled: The asynchronous operation has completed successfully.
  *  Rejected: The asynchronous operation has failed.

A Promise is created using the Promise constructor, which takes a callback function as an argument. This callback function is called the "executor function" and it receives two arguments: resolve and reject. The executor function is responsible for starting the asynchronous operation and either calling the resolve function when the operation is complete, or the reject function if the operation fails.

**Here is an example of a Promise that represents the result of an asynchronous operation to fetch data from a server:**

  ```
const fetchDataPromise = new Promise((resolve, reject) => {
  // Make an HTTP request to the server
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://example.com/api/data");
  xhr.onload = () => {
    // If the request was successful, resolve the Promise with the response data
    if (xhr.status === 200) {
      resolve(xhr.response);
    } else {
      // Otherwise, reject the Promise with the error message
      reject(xhr.statusText);
    }
  };
  xhr.onerror = () => {
    // Reject the Promise with the error message
    reject(xhr.statusText);
  };
  xhr.send();
});
  ```

Once a Promise is created, you can use its then method to specify what should happen when the Promise is fulfilled or rejected. The then method takes two arguments: a callback function for when the Promise is fulfilled, and a callback function for when the Promise is rejected.

  ```
fetchDataPromise
  .then(
    (data) => {
      // This function is called if the Promise is fulfilled
      console.log("Data received:", data);
    },
    (error) => {
      // This function is called if the Promise is rejected
      console.error("Error:", error);
    }
  );
  ```

You can also chain multiple then methods together to perform multiple asynchronous operations in sequence.

  ```
fetchDataPromise
  .then((data) => {
    // Do something with the data
    return data.json();
  })
  .then((json) => {
    // Do something with the JSON data
  })
  .catch((error) => {
    // This function is called if any of the Promises in the chain are rejected
    console.error("Error:", error);
  });

  ```

## Async/Await

Async/Await is a syntax introduced in ES2017 that makes it easier to work with Promises. It allows you to use asynchronous code in a way that looks and feels like synchronous code.

To use async/await, you need to declare a function as async. You can then use the await keyword inside