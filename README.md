![X-Spring-Cli](./_media/node-js.png)

# X-CLI for parsing a json file

Download and install the cli tool.
For doing that locally 

```$bash
npm install
npm link
```
after that you can create the controller and services from the command line
```$bash
 say-hello-cat getcategorypath xxx ./categories.json
 say-hello-cat getcategorypathbylevel xxx ./categories.json 3
```
```$bash
 node index.js getcategorypath xxx ./categories.json
 node index.js getcategorypathbylevel xxx ./categories.json 3
```
```$bash
 npm run cli getcategorypath -- xxx -- ./categories.json
 npm run cli getcategorypathbylevel -- xxx -- ./categories.json -- 3
```


## developing command line tools
- use the chalk lib to colorize the logs
- use the commander lib to create the command options
- use the npm link to create a symbolic link stored in the /usr/local/bin/say-hello.
- use the `npm install --save-dev jest babel-jest @babel/core @babel/preset-env` or `jest --init`
- setup jest in the package json file.

Everytime you run 'say-hello-cat' you executing the cli.


![X-Spring-Cli](./_media/middy.png)
