function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
      (resolve) => {
        resolve();
      } else {
        reject();
      }
  });
}


export default getResponseFromAPI;