FROM node:carbon

WORKDIR /api

# Install deps
COPY ./api/package.json ./
RUN npm install

# Copy app source
COPY ./api .

# Copy client-side app to express static files
COPY ./client/build/static/css/* ./public/css/
COPY ./client/build/static/js/* ./public/js/
COPY ./client/build/index.html ./public/pages/

# Default port and command
EXPOSE 8000
CMD [ "npm", "start" ]
