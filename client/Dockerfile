FROM node:20-alpine
WORKDIR /var/www/client
COPY . /var/www/client/
RUN chown -Rh node:node /var/www/client/
RUN npm ci --no-audit
USER node
CMD ["sh", "-c", "npm run start"]