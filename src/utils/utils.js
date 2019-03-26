import axios from 'axios';
import { insertTaskUrl, getTasksUrl } from './Constants';

function getLastId(id) {
  return (parseInt(id) + 1).toString()
}

//////////////////////////////////////////////////////////////////////////
// Since CORS are fucking everything up.... These are temporary solutions
// json-server -p 3001  --watch src/utils/mocks/get_all_tasks_mock.json
//////////////////////////////////////////////////////////////////////////

function getItemsFromAPI() {
  return axios(getTasksUrl);
}

function saveItemsToAPI(state, taskName, taskDescription) {
  debugger;
  let payload = {
    "payload": state.items.concat({
      "id": state.lastId,
      "task_description": taskName,
      "task_name": taskDescription
    })
  };

  //axios.post(insertTaskUrl, payload)
}

export { getLastId, getItemsFromAPI, saveItemsToAPI }