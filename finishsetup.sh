# Define the container and the Python command
containerName="backend"
command="cd /var/www/server/ && python manage.py makemigrations management && python manage.py migrate && python manage.py collectstatic --noinput"

# Define the command to create a superuser
createSuperUser='echo "from django.contrib.auth.models import User; User.objects.create_superuser('\''admin'\'', '\''admin@example.com'\'', '\''password'\'')" | python manage.py shell'

# Use Docker exec to run the command in the container
docker exec -it $containerName /bin/bash -c "$command"

# Just uncomment for first run or change super user
# docker exec -it $containerName /bin/bash -c "$createSuperUser"