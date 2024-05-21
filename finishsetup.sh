# Define the container and the Python command
containerName="backend"
command="cd /var/www/server/ && \
    python manage.py makemigrations && \
    python manage.py migrate && \
    python manage.py collectstatic --noinput && \
    python manage.py shell < /var/www/server/management/update_product.py"

# Define the command to create a superuser, uncomment docker run below to create new
createSuperUser="python manage.py createsuperuser"

# Use Docker exec to run the command in the container
docker exec -it $containerName /bin/sh -c "$command"
# docker exec -it $containerName /bin/sh -c "$createSuperUser"
