# hbg-react

Library of reusable React components

## Installation

```
npm install --save-dev hbg-react
```

Then require the components you want to use:

```
import {Dropdown, Button} from 'hbg-react';
```

## Local Development

1. This library uses [nwb](https://github.com/insin/nwb) for building assets and requires it to be installed globally

```
npm install -g nwb
```

2. Clone the repo into a own directory

```
git clone git@github.com:helsingborg-stad/hbg-react.git hbg-react
```

3. Go to the directory and install dependencies:

```
cd hbg-react
npm install
```

4. Start development server

```
npm run start
```

## Publish package

1. Go to hbg-react directory and make sure you are logged in:

```
npm whoami
```

2. Bump package version:

```
npm version patch | minor | major
```

3. Build assets for production

```
npm run build
```

4. Commit changes, set release tag and publish to github
5. Then publish to NPM:

```
npm publish
```

## To do

-   Write tests for each component
-   Demo page
