/*
 * python-restful接口-增删改查
 */
export const requestFormat = function (url, reqest) { // 请求转化 // 批量和单个删除
    const con = reqest.content || {}
    if (reqest.method === undefined) reqest.method = 'GET'
    const obj = new Map([
        ['GET', {
            url: url,
            method: 'GET',
            query: con
        }],
        ['POST', {
            url: url,
            method: 'POST',
            body: con
        }],
        ['PUT', {
            url: `${url}${reqest.id}/`,
            method: 'PUT',
            body: con
        }],
        ['DELETE', {
            url: `${url}${reqest.id}/`,
            method: 'DELETE',
            body: con
        }],
        ['PATCH', {
            url: url,
            method: 'DELETE',
            body: con
        }],
        ['default', {
            url: ''
        }]

    ])
    const action = obj.get(reqest.method) || obj.get('default')
    if (!action.url) {
        this.$message({
            message: '警告哦，这是一条警告消息',
            type: 'warning'
        })
        return
    }
    return action
}