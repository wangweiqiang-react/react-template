import {
    message
} from 'antd';
export const tipMsg = function (type = 'info', msg) {
    message[type](msg);
}

export const throttle = function (func, wait, mustRun) {
    let timeout = null
    let startTime = new Date();
    return function () {
        let context = this
        let args = arguments
        let curTime = new Date()
        clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= mustRun) {
            func.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
            timeout = setTimeout(func, wait);
        }
    }
}