import * as axios from 'axios'

let options = {}
// The server-side needs a full url to works
// if (process.server) {
//   options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
// }

axios.interceptors.request.use((req) => {
  console.log('请求前')
})

axios.interceptors.response.use((res) => {
  console.log('请求后')
})

export default axios.create(options)
