CREATE USER remise;
CREATE DATABASE remisedb;
ALTER ROLE remise SET default_transaction_isolation TO 'read committed';
ALTER ROLE remise SET client_encoding TO 'utf8';
ALTER ROLE remise SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE remisedb TO remise;