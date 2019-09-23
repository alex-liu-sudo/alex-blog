import request from '../utils/request'

export function getActivityList(params) {
    return request({
        url: '/api/activity',
        params: params
    })
}

export function getGoodsList(params) {
    return request({
        url: '/api/goods',
        params: params
    })
}
