FROM python:3.11-alpine

WORKDIR /var/www/server
COPY . /var/www/server/
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

CMD ["gunicorn", "-b", "0.0.0.0:8000", "server.wsgi"]