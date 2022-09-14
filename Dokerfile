FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

ARG API_ENDPOINT

ENV API_ENDPOINT $API_ENDPOINT

COPY . .

EXPOSE 3000:3000

CMD [ "npm", "start" ]