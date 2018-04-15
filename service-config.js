const isProd = process.env.NODE_ENV === 'production'

exports.isProd = isProd

exports.api = isProd ? 'http://www.lovebugs.top:9528/' : 'http://127.0.0.1:9528/' // 'http://api.lovebugs.top/'

// const proxy = {
//   protocol: isProd ? 'http://' : 'http://',
//   host: isProd ? 'lovebug.top' : 'localhost',
//   port: isProd ? '9528' : exports.serverPort
// }
// exports.proxy = proxy
// exports.proxyApi = proxy.protocol + proxy.host + `${proxy.port ? ':' + proxy.port : ''}` + '/'
