FROM node:18-alpine


WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 1337

RUN npm rebuild

CMD npm run develop