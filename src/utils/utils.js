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

function saveItemsToAPI(items) {
  
}

/////////////////////////////////////////////////////////////////////////
// Since CORS are fucking everything up.... These are temporary solutions
/////////////////////////////////////////////////////////////////////////

function getMockedItems() {
  let payload = require('./mocks/get_all_tasks_mock').payload;
  return (payload ? payload : []);
}

function saveItems(state, taskName, taskDescription) {
  let fs = require('browserify-fs');

  let fileContent = {
    "code": 200,
    "message": "OK",
    "payload": state.items.concat({
      "id": state.lastId,
      "task_description": taskName,
      "task_name": taskDescription
    })
  };
  
  fs.writeFile('./mocks/get_all_tasks_mock.json', JSON.stringify(fileContent), 'utf8', function(error){
    if(error) throw error;
  })
}

export { getItemsFromAPI, saveItemsToAPI, getMockedItems, saveItems }