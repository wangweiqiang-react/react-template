import React from 'react';
import moment from 'moment'

export default {
    formateYear(time) {
        return moment().format('YYYY')
    },
    // 隐藏手机号中间4位
    formatPhone(phone) {
        phone += '';
        return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
    },
    // 隐藏身份证号中11位
    formatIdentity(number) {
        number += '';
        return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2')
    },
    isObject: input => typeof input === 'object' && !(input instanceof Array),
    isEmptyObject(e) {
        let t
        for (t in e) {
            return !1
        }
        return !0
    }
}