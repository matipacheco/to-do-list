import axios from 'axios';
import { insertTaskUrl, getTasksUrl } from './Constants';

export function getLastId(id) {
  return (parseInt(id) + 1).toString()
}

//////////////////////////////////////////////////////////////////////////
// Since CORS are fucking everything up.... These are temporary solutions
// json-server -p 3001  --watch src/utils/mocks/get_all_tasks_mock.json
//////////////////////////////////////////////////////////////////////////

 export function getItemsFromAPI() {
  return axios(getTasksUrl);
}

export function saveItemsToAPI(id, taskName, taskDescription) {
  return axios.post(
      insertTaskUrl,
      {
        "id": id,
        "task_description": taskDescription,
        "task_name": taskName
      })
}
