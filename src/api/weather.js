import request from '@/utils/request'
export function getData(city) {
    console.log(city)
    return request({
        url: `forecast?q=${city}&units=metric&cnt=40&appid=63623439096e87e393efaaa735fcb9cd&lang=r`,
        method: 'get',
    })
}

export function chooseCity(data) {
    return request({
        method: 'post',
        data,
    })
}
// export function getCities() {
//     return request({
//         url: `forecast?q=${ 'london' },uk&units=metric&cnt=40&appid=63623439096e87e393efaaa735fcb9cd&lang=r`,
//         method: 'get',
//     })
// }