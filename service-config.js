const isProd = process.env.NODE_ENV === 'production'

exports.isProd = isProd

exports.api = isProd ? 'https://api.diamondfsd.com/' : 'http://127.0.0.1:8889/' // 'http://api.diamondfsd.com/'


const proxy = {
  protocol: isProd ? 'https://' : 'http://',
  host: isProd ? 'diamondfsd.com' : 'localhost',
  port: isProd ? '' : exports.serverPort
}
exports.proxy = proxy

exports.proxyApi = proxy.protocol + proxy.host + `${proxy.port ? ':' + proxy.port : ''}` + '/'
