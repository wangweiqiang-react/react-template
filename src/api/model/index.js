// common公用api
import httpService from './../httpService'
import {
    requestFormat
} from '@/utils/formatHttp'
export default {
    // queryPageList
    queryPageList: params => httpService.accessAPI(requestFormat('/api/data', params))
}