import pytest
import json


def test_submit_reimburse(backend_server):
    res = backend_server.post(
        '/auth/user/login',
        data=json.dumps(
            {
                'email': 'mitfans881@gmail.com',
                'id': 'anonymous',
                'imageUrl': 'google.anonymous',
                'name': 'Wilson Wang'
            }
        ),
        content_type='application/json'
    )

    token = res.get_data(as_text=True)
    
    submit_res = backend_server.post(
        'auth/reimburse/submit',
        data=json.dumps(
            {
                'productName': 'Motor', 
                'classification': 'Engineer', 
                'itemUrl': 'ebay.com', 
                'price': '5',
                'quantity': '1', 
                'deliveryFee': '1', 
                'dateNeeded': '2020-1-2', 
                'reasonToPurchase': 'Needed', 
                'recipient_photo_url': ''
            }
        ),
        headers={'authorization': token},
        content_type='application/json'
    )

    data = json.loads(submit_res.get_data(as_text=True))

    assert submit_res.status == '200 OK'
    assert data == {'message': 'OK'}