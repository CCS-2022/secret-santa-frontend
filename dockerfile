FROM node:latest

WORKDIR /app

COPY package.json package.json

COPY package-lock.json package-lock.json

COPY vite.config.js vite.config.js

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "dev", "--", "--host"]
