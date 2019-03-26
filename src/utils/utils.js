import axios from 'axios';
import { getAllTasksUrl, getAllTasksJsonServerUrl } from './Constants';

function getLastId(id) {
  return (parseInt(id) + 1).toString()
}

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
  axios.get(getAllTasksUrl, {headers: {'Access-Control-Allow-Origin': '*'}})
      .then(data => console.log(data))
      .catch(err => console.log(err));
}

function saveItemsToAPI(items) {
  
}

//////////////////////////////////////////////////////////////////////////
// Since CORS are fucking everything up.... These are temporary solutions
// json-server -p 3001  --watch src/utils/mocks/get_all_tasks_mock.json
//////////////////////////////////////////////////////////////////////////

function getMockedItems() {
  return axios(getAllTasksJsonServerUrl);
}

function saveItems(state, taskName, taskDescription) {
  return {
    "code": 200,
    "message": "OK",
    "payload": state.items.concat({
      "id": state.lastId,
      "task_description": taskName,
      "task_name": taskDescription
    })
  };
}

export { getLastId, getItemsFromAPI, saveItemsToAPI, getMockedItems, saveItems }