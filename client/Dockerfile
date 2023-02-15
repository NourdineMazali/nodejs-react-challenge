# node enviroment
FROM node

# root directory
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

# install all dependencies
RUN npm install
COPY . .

# Set the environment variables
ENV HOST 0.0.0.0

# expose client port
EXPOSE 3000 

# command to start
CMD ["npm", "start"]