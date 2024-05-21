import requests
import time
import random
import pandas as pd



headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'vi-VN,vi;q=0.8,en-US;q=0.5,en;q=0.3',
    'Referer': 'https://tiki.vn/nha-cua-doi-song/c1883',
    'x-guest-token': 'F7Xryp6hutPq3YIvRWbnkjmVJNB0CHAG',
    'Connection': 'keep-alive',
    'TE': 'Trailers',
}

params = {
    'limit': '40',
    'include': 'sale-attrs,badges,product_links,brand,category,stock_item,advertisement',
    'aggregations': '1',
    'trackity_id': 'ced20b45-c034-ab1c-5a4d-aa168df92337',
    'category': '1883',
    'page': '1',
    'src': 'c1883',
    'urlKey':  'nha-cua-doi-song',
}

product_id = []
for i in range(1,11):
    params['page'] = i
    response = requests.get('https://tiki.vn/api/personalish/v1/blocks/listings', headers=headers, params=params)#, cookies=cookies)
    if response.status_code == 200:
        print('request success!!!')
        for record in response.json().get('data'):
            product_id.append({'id': record.get('id')})
    time.sleep(random.randrange(1, 2))

df = pd.DataFrame(product_id)
df.to_csv('product_id_nhacuadoisong.csv', index=False)