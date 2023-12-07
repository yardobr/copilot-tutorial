# Step 1: Specify the base image
FROM node:17

# Step 2: Set the working directory in the Docker image
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application
COPY . .

# Step 6: Expose the port your app runs on
EXPOSE 3000

# Step 7: Specify the command to run your application
CMD [ "node", "index.js" ]