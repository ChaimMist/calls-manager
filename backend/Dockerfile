FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --verbose

COPY . .

CMD ["npm", "run", "start:prod"]