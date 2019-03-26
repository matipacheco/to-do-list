import axios from 'axios';
import { GetAllTasksUrl } from './Constants';

function getItemsFromAPI() {
  // let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
  // let config  = {
  //     method: "GET",
  //     headers: headers,
  //     mode: "cors"
  // };
  //
  // fetch(GetAllTasksUrl, config)
  //     .then(response => console.log(response.json()))
  //     .catch(error => console.log(error));
  axios.get(GetAllTasksUrl, {headers: {'Access-Control-Allow-Origin': '*'}})
      .then(data => console.log(data))
      .catch(err => console.log(err));
}

function getMockedItems() {
  // Since CORS are fucking everything up.... This a temporary solution
  let payload = require('./mocks/get_all_tasks_mock').payload;
  return (payload ? payload : []);

}

function saveItems(items) {
  debugger;
}

export { getItemsFromAPI, getMockedItems, saveItems }