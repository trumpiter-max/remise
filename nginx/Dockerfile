FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/
# RUN rm /etc/nginx/conf.d/default.conf
# COPY ./conf/default.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]