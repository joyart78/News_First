import http from './http.js'


export async function all() {
    let res = await http.get('/posts')
    return res.data
}