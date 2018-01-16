import axios from 'axios'
import serverConfig from '../service-config'
import Const from '../utils/const/index.js'
const root = serverConfig.api

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = 'https://api.nashi8.com/'

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res
  } else {
    return Promise.reject(res)
  }
}, (error) => {
  return Promise.reject(error)
})

function getUrl (path) {
  if (path.startsWith('http:') || path.startsWith('https:')) {
    return path
  } else {
    return root + path
  }
}

function proessData (response, e) {
  let result = response.data
  if (result.success) {
    return result.data
  }
  console.log('basedao error: ', result, e)
  throw result || e
}

function serialize (data = {}) {
  let dataStr = []
  Object.keys(data).forEach(k => {
    let value = data[k]
    if (value !== null && value !== undefined) {
      dataStr.push(`${k}=${encodeURI(value)}`)
    }
  })
  return dataStr.join('&')
}

function get (path, data) {
  let url = getUrl(path)

  return axios.get(url + '?' + serialize(data)).then(proessData)
}
function post (path, data) {
  let url = getUrl(path)
  let opt = {}
  if (window) {
    let token = window.localStorage.getItem(Const.TOKEN_KEY)
    if (token) {
      opt['headers'] = {
        'Authorization': token
      }
    }
  }
  return axios.post(url, data, opt).then(proessData)
}
function page (path, currentPage = 1, pageSize = 10, data = {}) {
  data.currentPage = currentPage
  data.pageSize = pageSize
  return get(path, data)
}

export default { get, post, page }
