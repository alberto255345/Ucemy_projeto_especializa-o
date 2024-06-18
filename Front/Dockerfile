FROM node:22-alpine as build

WORKDIR /app

COPY ./Front/package*.json .

RUN npm install

COPY ./Front/. .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "run", "preview"]