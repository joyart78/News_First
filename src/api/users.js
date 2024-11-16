import http from './http.js'


export async function all() {
    let res = await http.get('/users')
    return res.data
}

export async function one() {
    let res = await http.get('/users/1')
    return res.data
}