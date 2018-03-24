FROM node:carbon

WORKDIR /api

# Install deps
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

# Default port and command
EXPOSE 8000
CMD [ "npm", "start" ]
