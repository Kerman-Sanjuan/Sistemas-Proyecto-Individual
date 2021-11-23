#!/bin/bash
cp /default.conf /etc/nginx/conf.d/
# service nginx reload
# cd /code/python
# flask run --host=0.0.0.0
nginx -g 'daemon off;'
#wait 
