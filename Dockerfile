# Write a dockerfile that builds an image with the following requirements:
# - a NodeJS v17 application
# - the application listens on port 3000

FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]