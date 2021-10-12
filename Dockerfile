FROM node:16.11

WORKDIR /server
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]