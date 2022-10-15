FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY app.js ./

COPY id.json ./

EXPOSE 8080

CMD [ "node", "app.js" ]