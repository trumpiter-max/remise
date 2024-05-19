FROM python:3.11-alpine

WORKDIR /var/www/server
COPY . /var/www/server/
RUN chmod 644 /var/www/server/
RUN chmod 755 /var/www/server/crawler/csv/
RUN apk update
RUN apk add build-base make gcc g++ python3-dev libffi-dev openssl-dev
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

CMD ["gunicorn", "-b", "0.0.0.0:8000", "server.wsgi"]