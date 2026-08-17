FROM node:24.14-slim

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

EXPOSE 5000

CMD ["node", "app.js"]