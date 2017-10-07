# Vue + Semantic UI + Firebase

> Template to quickly start development.

## Current behavior of setup

### if you are signed in:
- you try to access '/' : Redirect to 'Profile'
- you try to access '/profile' : Allowed
- you try to access '/asas' : Redirect to 'Page404'

### if you are signed out:
- you try to access '/' : Allowed
- you try to access '/profile' : redirected to 'Home'
- you try to access '/asas' : Redirect to 'Home'


## Build Setup

``` bash
# install dependencies
npm install

# update static/js/CONSTANTS.js by copying settings from firebase console.
[firebase](http://firebase.google.com)

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
