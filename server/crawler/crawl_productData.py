import pandas as pd
import requests
import time
import random
from tqdm import tqdm
import os
from datetime import datetime

# Lấy ngày và giờ hiện tại
current_datetime = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Tạo biến môi trường
os.environ['CURRENT_DATETIME'] = current_datetime



headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'en,en-US;q=0.9,vi;q=0.8',
    'Referer': 'https://tiki.vn/sach-cach-mang-luong-tu-tap-noi-khoa-hoc-gap-go-tam-linh-p274550666.html?itm_campaign=CTP_YPD_TKA_PLA_UNK_ALL_UNK_UNK_UNK_UNK_X.291389_Y.1873709_Z.3943094_CN.Product-Ads-26%2F04%2F2024&itm_medium=CPC&itm_source=tiki-ads&spid=274550667',
    'x-guest-token': 'F7Xryp6hutPq3YIvRWbnkjmVJNB0CHAG',
    'Connection': 'keep-alive',
    'TE': 'Trailers',
}

params = (
    ('platform', 'web'),
    ('spid', 274550667),
    ('version', 3),
)

def parser_product(json):
    d = dict()
    
    d['id'] = json.get('id')
    d['title'] = json.get('name')
    d['price'] = json.get('list_price')
    d['discount'] = json.get('price')   
    images = json.get('images')
    if images:
        first_image = images[0]
        base_url = first_image.get('base_url')
        # Gán giá trị base_url vào trường thumbnail của đối tượng d
        
        d['thumbnail'] = base_url
    d['description'] = json.get('short_description')
    d['category_id'] = 13 # coi trong bang category
    
    d['url'] = json.get('short_url')
    d['discount_rate'] = json.get('discount_rate')
    d['timestamp'] = current_datetime 
     
    return d

df_id = pd.read_csv('product_id_sport.csv')
p_ids = df_id.id.to_list()
print(p_ids)
result = []
processed_ids = set()  # Set to store processed product ID
for pid in tqdm(p_ids, total=len(p_ids)):
    if pid in processed_ids:
        print('Skipping duplicate ID: {}'.format(pid))
        continue
    
    try:
        response = requests.get('https://tiki.vn/api/v2/products/{}'.format(pid), headers=headers, params=params)
        if response.status_code == 200:
            print('Crawl data {} success !!!'.format(pid))
            result.append(parser_product(response.json()))
            processed_ids.add(pid)  # Add the processed ID to the set
            
        else:
            print('Failed to crawl data {} - Status code: {}'.format(pid, response.status_code))
    except Exception as e:
        print('Error occurred while crawling data {}: {}'.format(pid, str(e)))
    time.sleep(1)

df_product = pd.DataFrame(result)
df_product.to_csv('crawled_data_sport.csv', index=False)