FROM nginx:latest
RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/
RUN rm /etc/nginx/conf.d/default.conf
COPY conf.d/* /etc/nginx/conf/
CMD ["nginx", "-g", "daemon off;"]