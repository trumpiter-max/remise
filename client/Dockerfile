FROM node:20-alpine
WORKDIR /var/www/client
COPY . /var/www/client/
RUN yarn install
RUN yarn run build
CMD ["yarn","start"]