FROM node:16
WORKDIR /var/www/client
COPY . /var/www/client/
RUN npm install
RUN npm run build
CMD ["react-scripts","start"]