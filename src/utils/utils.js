import axios from 'axios';
import { GetAllTasksUrl, GetAllTasksJsonServerUrl } from './Constants';

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
  // json-server -p 3001  --watch src/utils/mocks/get_all_tasks_mock.json
  //let something = null;

  return axios(GetAllTasksJsonServerUrl);
      //  .then(function(response){
      //    return response.data;
      //  })
      // .catch(function(){
      //    return [];
      //  })
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

export { getItemsFromAPI, saveItemsToAPI, getMockedItems, saveItems }