import Gmaxios from './Gmaxios';

const connection = new Gmaxios();

export async function SubmitNewReimburse(data) {
    console.log(data)

    let res = await connection.post('/auth/reimburse/submit', data).catch(err => err);
    console.log(res)
    if(res && res.status === 200) {
        // console.log(res.data);
        return res.status;
    }
    return 401
}