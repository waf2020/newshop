import axios from 'axios'

export function basequest(options){
    const instance=axios.create({
        baseURL:"http://123.207.32.32:8000/api/wh",
        timeout:15000
    })

    return instance(options)
}
