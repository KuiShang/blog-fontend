import { Router } from 'express'

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

const tips = {'warn': `本台server只是提供支持nuxt服务端渲染的服务，并不提供数据服务，所以本服务器并不需要提供路由，或者其他接口，
nuxt前端所有的数据请求由axios直接发出向数据服务器请求（相当于由客户端请求），而不需要由本服务器在中转一次，（相当于客户端请求到本服务器，
本服务器在进行转发到数据服务器，中间多了一层，没有必要如此）`}
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(tips)
})
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
