# default node enviroment
FROM node

# specify node enviroment matching package.json
ENV NODE_VERSION 17.3.0

# root directory
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
# install all dependencies
RUN npm install
COPY . .
EXPOSE 4000

# command to start
CMD ["npm", "start"]