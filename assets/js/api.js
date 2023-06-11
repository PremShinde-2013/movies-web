/** @format */

'use strict';

const api_key = '19f84e11932abbc79e6d83f82d6d1045';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// fetch data

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
