FROM node:20-alpine
WORKDIR /var/www/client
COPY . /var/www/client/
RUN npm install
RUN npm run build
CMD ["npm","start"]