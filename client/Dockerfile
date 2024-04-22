FROM node:16
WORKDIR /var/www/client
COPY . /var/www/client/
RUN chown -Rh node:node /var/www/client
USER node
CMD ["sh", "-c", "npm install && npm run start"]