

FROM nginx

WORKDIR /etc/nginx

COPY ./resources/nginx.conf /etc/nginx/

COPY ./run.sh	/

COPY ./resources/myserver /etc/nginx/sites-avaliable

COPY ./resources/default.conf /
# RUN ln -sf /etc/nginx/sites-avaliable/myserver /etc/nginx/sites-enabled/myserver


# Es posible que no haya que hacer reload

EXPOSE 80 

# Entrada -> 80 ----> al 3000 que es otro contenedor escuchando

# CMD ["nginx", "-g", "daemon off;"]
CMD /run.sh
