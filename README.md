# Sistemas-Proyecto-Individual

## AVISO: Para que funcione la aplicacion correctamente, es necesario que el puerto 80 del localhost no este utilizado por nada (Ni Apache ni NGINX)

## AVISO 2: Aunque el EXPRESS escuche en el puerto 3000, el reverse proxy redirecciona todo desde el 80, asique el acceso sin especificar funciona.
Para ejecutar.
1. Docker: docker-compose up
2. Kubernetes: kubectl apply -f /kubernetes 

Si se quiere probar cada Dockerfile individualmente.
1. docker build . (NGINX)
2. docker build -f DockerfileJS (API-REST JS)
