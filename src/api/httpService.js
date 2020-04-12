import http from '@/utils/http'
import util from '@/utils/Utils'
export default {
    accessAPI: function (opts, type = '') {
        let [apiObj, _method] = ['', '']
        // 业务逻辑请求方式
        apiObj = opts || {}
        _method = opts.method
        const _body = opts.body || {}
        const _path = opts.path
        const _query = {}
        const _headers = {}
        let apiUrl = apiObj.url
        if (util.isObject(_path)) {
            Object.keys(_path).forEach(key => {
                apiUrl = apiUrl.replace(':' + key, _path[key])
            })
        }
        if (opts.query && !util.isEmptyObject(opts.query)) {
            Object.keys(opts.query).forEach(key => {
                if (opts.query[key] !== '' && opts.query[key] !== undefined && opts.query[key] !== null) {
                    _query[key] = opts.query[key]
                }
            })
        }
        return http({
            url: apiUrl,
            method: _method,
            params: _query,
            data: _body,
            headers: _headers
        })
    }
}