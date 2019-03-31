import axios from 'axios'
import { theOneAndOnly } from './Constants'


function formatId(id) {
  return (parseInt(id) + 1).toString()
}

export function getLastId(response) {
  return formatId(response.data.slice(-1).pop().id)
}

//////////////////////////////////////////////////////////////////////////
// Since CORS are fucking everything up.... These are temporary solutions
// json-server -p 3001  --watch src/utils/mocks/get_all_tasks_mock.json
//////////////////////////////////////////////////////////////////////////

export function getItemsFromAPI() {
  return axios(theOneAndOnly);
}

export function saveItemsToAPI(taskId, taskName, taskDescription) {
  return axios.post(
    theOneAndOnly,
    {
      "id": taskId,
      "task_description": taskDescription,
      "task_name": taskName
    })
}

export function deleteItemFromAPI(taskId) {
  return axios.delete(
    theOneAndOnly + taskId
  )
}
