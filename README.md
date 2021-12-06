# Sistemas-Proyecto-Individual

## AVISO: Para que funcione la aplicacion correctamente, es necesario que el puerto 80 del localhost no este utilizado por nada (Ni Apache ni NGINX)

Para ejecutar.
1. Docker: docker-compose up
2. Kubernetes: kubectl apply -f /kubernetes 

Si se quiere probar cada Dockerfile individualmente.
1. docker build . (NGINX)
2. docker build -f DockerfileJS (API-REST JS)
