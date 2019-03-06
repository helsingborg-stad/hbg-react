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

2. Run npm version to bump package version, build assets and add version commit.

```
npm version patch | minor | major
```

3. Review the generated commit, if happy run npm publish - this will push to origin master (with tags) & publish NPM package.

```
npm publish
```

## To do

-   Write tests for each component
-   Demo page
