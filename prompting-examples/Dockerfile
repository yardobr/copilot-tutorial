# generate a dockerfile for a node.js app
# copy source code
# set working directory to ./app
# install npm dependencies
# expose port 3000
# run the app by running `npm start`

FROM node:12.18.3-alpine3.12
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
EXPOSE 3000
CMD npm start
