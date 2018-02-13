import dao from './BaseDao'
export default {
  list (currentPage, pageSize, params) {
    return dao.page('v1/article', currentPage, pageSize, params)
  },
  get (id) {
    return dao.get('article/detail/' + id)
  },
  getRender (id) {
    return dao.get('v1/article/' + id)
  },
  allNames () {
    return dao.get('article/article-map')
  },
  listAll () {
    return dao.get('article/list-all')
  }
}
