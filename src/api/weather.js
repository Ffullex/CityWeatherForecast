import request from '@/utils/request'


export function getData() {
    return request({
        url: 'forecast?q=London,uk&units=metric&cnt=10&appid=63623439096e87e393efaaa735fcb9cd&lang=ru',
        method: 'get',
    })
}
export function getCities() {
    return request({
        url: 'weather?q=London,uk&callback=test&units=metric&cnt=10&appid=63623439096e87e393efaaa735fcb9cd&lang=ru',
        method: 'get',
    })
}