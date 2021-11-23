# FROM ubuntu
FROM nikolaik/python-nodejs:python3.10-nodejs17

RUN mkdir /code

COPY . /code

RUN apt -qq update 

ENV FLASK_APP=/code/python/src/app.py   

RUN pip install -r /code/python/src/requirements.txt

EXPOSE 5000

WORKDIR /code/python


EXPOSE 5005

WORKDIR /code/nodejs

RUN npm install 
RUN npm install sqlite3 --save
RUN npm audit fix --force


#CMD ["npm","start"]
CMD ["sh","/code/run.sh"]
