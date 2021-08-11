import request from '@/utils/request'


export function getData() {
    return request({
        url: 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&callback=test&cnt=10&appid=63623439096e87e393efaaa735fcb9cd&lang=ru',
        method: 'get',
    })
}
export function getCities() {
    return request({
        url: 'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1',
        method: 'get',
    })
}