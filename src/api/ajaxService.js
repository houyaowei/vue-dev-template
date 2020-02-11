import "whatwg-fetch";
import URL from "./urlConfig";

let getData = function(url, data, resolve) {
  let option = {
    method: "POST",
    credentials: "include",
    body: data
  };
  fetch(url, option)
    .then(resp => resp.json())
    .then(data => {
      resolve({ res: data });
    })
    .catch(err => {
      console.log(err);
    });
};

export function login() {
  return new Promise(resolve => {
    console.log("ajaxService");
    let url = URL.login;
    let postData = {};
    // getData(url, postData, resolve);
    resolve({ res: true });
  });
}
