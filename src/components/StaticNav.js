import axios from "axios";
import apiKey from "../config.js";

let cats = {};
let dogs = {};
let computers = {};

axios
  .get("https://www.flickr.com/services/rest/?method=flickr.photos.search", {
    params: {
      api_key: apiKey,
      tags: "cats",
      format: "json",
      nojsoncallback: 1,
      per_page: 24,
      page: 1,
      extras: "url_c",
    },
  })
  .then((response) => {
    cats = response.data.photos.photo;
  })
  .catch((error) => {
    console.log("there was an error " + error);
  });

axios
  .get("https://www.flickr.com/services/rest/?method=flickr.photos.search", {
    params: {
      api_key: apiKey,
      tags: "dogs",
      format: "json",
      nojsoncallback: 1,
      per_page: 24,
      page: 1,
      extras: "url_c",
    },
  })
  .then((response) => {
    dogs = response.data.photos.photo;
  })
  .catch((error) => {
    console.log("there was an error " + error);
  });

axios
  .get("https://www.flickr.com/services/rest/?method=flickr.photos.search", {
    params: {
      api_key: apiKey,
      tags: "computers",
      format: "json",
      nojsoncallback: 1,
      per_page: 24,
      page: 1,
      extras: "url_c",
    },
  })
  .then((response) => {
    computers = response.data.photos.photo;
  })
  .catch((error) => {
    console.log("there was an error " + error);
  });

export { cats, dogs, computers };
