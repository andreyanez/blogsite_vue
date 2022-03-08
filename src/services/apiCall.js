import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTags () {
    return apiClient.get('/tags')
  },
  getPosts () {
    return apiClient.get('/posts')
  },
  getEvent (id) {
    return apiClient.get('/events/' + id)
  }
//   postEvent (event) {
//     return apiClient.post('/events', event)
//   }
}
