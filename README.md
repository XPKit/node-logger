# node-logger

## Project setup
```
npm install
```

### start server
```
npm run server
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Quick start with both server and dev
```
git clone git@github.com:XPKit/node-logger.git
cd node-logger
npm install
npm start
```

### build (you need to do that before checkin)
```
npm run build
```

### front end vue integration
in main.js
```
import LogViewer from 'node-logger/dist/log-viewer.umd.min'

Vue.use(LogViewer)
```

in vue file
```
<template>
  <log-viewer
    url="/api/staging/logs"
  />
</template>
```

import css
```
@import '../../node_modules/node-logger/dist/log-viewer';
```



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
