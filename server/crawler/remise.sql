DELETE FROM public.management_category;
DELETE FROM public.management_product;

insert into public.management_category values (1,'Phone');
insert into public.management_category values (2,'Book');
insert into public.management_category values (3,'HouseWare');
insert into public.management_category values (4,'Accessories');
insert into public.management_category values (5,'HouseholdElectricial');
insert into public.management_category values (6,'Cosmetics');
insert into public.management_category values (7,'Sport');
insert into public.management_category values (8,'Vehicle');
insert into public.management_category values (9,'WomenFashion');
insert into public.management_category values (10,'DepartmentStore');
insert into public.management_category values (11,'MenFashion');
insert into public.management_category values (12,'Laptop-Accessory');
insert into public.management_category values (13,'Shoes-Sandal-Men');




COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_phone.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_book.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_houseWare.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_accessories.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_householdElectricial.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_cosmetics.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_sport.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_vehicle.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_womenFashion.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_departmentStore.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_menFashion.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_laptop-accessory.csv' DELIMITER ',' CSV HEADER ;
COPY PUBLIC."management_product" FROM 'D:\crawl\crawled_data_shoes-sandal-men.csv' DELIMITER ',' CSV HEADER ;







