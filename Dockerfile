FROM node:16

# Create app directory
RUN mkdir -p /usr/src/schedulex
WORKDIR /usr/src/schedulex

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# Bundle app source
COPY . /usr/src/schedulex

RUN npm ci --only=production
# If you are building your code for production
# RUN npm ci --only=production

RUN npm run build
EXPOSE 3000
CMD npm run start