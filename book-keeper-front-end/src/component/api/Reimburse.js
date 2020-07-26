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

export async function GetReimburseHistory() {
    let res = await connection.get('/auth/reimburse/gethistory').catch(err => err);
    return res;
}

export async function ApproveReimburse(reimburse_id) {
    let res = await connection.get('/auth/reimburse/approve/'+reimburse_id).catch(err => err);
    if(res && res.status === 200) {
        // console.log(res.data);
        return res.status;
    }
    return 401
}

export async function RejectReimburse(reimburse_id) {
    let res = await connection.get('/auth/reimburse/reject/'+reimburse_id).catch(err => err);
    if(res && res.status === 200) {
        // console.log(res.data);
        return res.status;
    }
    return 401
}