# snippetly

## Description

https://snippetly.herokuapp.com

Snippetly stores and displays code snippets for different languages. This
project is mainly an exercise in using an Express/GraphQL based backend with a
React/Redux frontend.

## Contributing

Getting a development environment for this app is a little more involved than
some projects since it consists of a React app, an Express GraphQL API, and a
Mongo database.

The API lives in the `api` folder and is a basic Express GraphQL API with a
Mongoose database client, and it also serves the client app as a static file
and a basic index page.

The React app lives in the `client` folder and was built with create-react-app.

Ensure you are running node stable (8.9.4 currently), highly recommend [Node
Version Manager](https://github.com/creationix/nvm) for this.

Run `yarn install` and `cd client; yarn install`.

Install docker and docker-compose then run `./rebuild.sh` to build the
containers.

The API should be running at `http://localhost:8000/api` and the client app's
development server can be started using `cd client; yarn start`. Visit the
client's development page to start developing on the app, and it will use the
docker API container as the backend. Any changes to the source should now
reload the development page.

To deploy changes, run `cd client; yarn run build; yarn run install` and commit
changes to master. Heroku watches the master branch and deploys it to
production.

## TODO

- Do some general styling for delete snippet button, background and add snippet
- Fix anti-aliasing issue most evident on 5 sided carousel
  form
- Investigate mode-python.js missing file
- Investigate automatically scrolling cursor warning
- Investigate service worker error
- Investigate autocomplete attributes warning
- Change add snippet language field to open source multiselect
- Add support for more languages (mainly dev icons and colour scheme)
- Prevent less than two snippets to keep carousel working
- Add per-user snippets and some auth based on social login
- Write some proper tests
- Fix mongo-seed running on every `docker-compose up`

## Licence

MIT License

Copyright (c) [2018] [Karl Hopkinson-Turrell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
