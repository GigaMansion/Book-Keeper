import Gmaxios from './Gmaxios';

const connection = new Gmaxios();

export async function Login(data) {
    console.log(data)
    // remove current token
    sessionStorage.removeItem('gm-token');

    let res = await connection.post('/auth/user/login', data).catch(err => err);
    console.log(res)
    if(res && res.status === 200) {
        // console.log(res.data);
        sessionStorage.setItem('gm-token', res.data);
        return res.status;
    }
    return 401
}

export async function CheckAuth(data) {
    let res = await connection.post('/auth/user/checkauth',data).catch(err => err)
    console.log(res)
    if(res && res.status === 200) {
        return res.status;
    }
    return 401
}