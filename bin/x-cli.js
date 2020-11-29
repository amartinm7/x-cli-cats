#!/usr/bin/env node

/*
in the package.json:

  "bin": {
    "say-hello-category-path": "bin/x-cli.js"
  },

when we install the artifact globally we are creating the link between this file bin/x-cli.js and the symbolic link
say-hello-category-path, stored in the /usr/local/bin/say-hello-category-path
In this way we can call it as
say-hello-category-path getcategorypath 802 ./filpath.json
and it will works
*/

// only calls to the index.js
require('../index.js')
