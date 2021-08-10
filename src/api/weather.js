import request from '@/utils/request'

export function getData() {
    return request({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=7ddbbac4414598a0582efd0c12096e75&lang=ru',
        method: 'get',
    })
}

