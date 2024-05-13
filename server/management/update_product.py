from django.db import IntegrityError
from management.models import Category, Product
import csv

# Define the categories
categories = [
    (1, 'Phone'),
    (2, 'Book'),
    (3, 'HouseWare'),
    (4, 'Accessories'),
    (5, 'HouseholdElectricial'),
    (6, 'Cosmetics'),
    (7, 'Sport'),
    (8, 'Vehicle'),
    (9, 'WomenFashion'),
    (10, 'DepartmentStore'),
    (11, 'MenFashion'),
    (12, 'Laptop-Accessory'),
    (13, 'Shoes-Sandal-Men')
]

# Insert categories into the database
for id, name in categories:
    try:
        Category.objects.create(id=id, name=name)
    except IntegrityError:
        pass  # Do nothing if the category already exists

# Define the CSV files
csv_files = [
    '/var/www/server/crawler/csv/tiki/crawled_data_phone.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_book.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_houseware.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_accessories.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_householdElectricial.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_cosmetics.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_sport.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_vehicle.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_womenFashion.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_departmentStore.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_menFashion.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_laptop-accessory.csv',
    '/var/www/server/crawler/csv/tiki/crawled_data_shoes-sandal-men.csv'
]

# Insert products into the database from the CSV files
for csv_file in csv_files:
    with open(csv_file, 'r') as f:
        reader = csv.reader(f)
        next(reader)  # Skip the header row
        for row in reader:
            id, title, price, discount, thumbnail, description, category_id, url, discount_rate, brand, quantity_sold, timestamp = row
            try:
                Product.objects.create(id=id, title=title, price=price, discount=discount, thumbnail=thumbnail, description=description, category_id=category_id, url=url, discount_rate=discount_rate, brand=brand, quantity_sold=quantity_sold, timestamp=timestamp)
            except IntegrityError:
                pass  # Do nothing if the product already exists
