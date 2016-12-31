## Basic app structure

- Start in port 3000, hot webpack-dev-server

`npm start`

- Build static

`npm run build`

### Code Standard tools and security check
- [husky](https://github.com/typicode/husky) to setup prepush and precommit hooks 
- [editorconfig](http://editorconfig.org/) Code style linter
- [eslint](https://github.com/eslint/eslint) JS linter

### Testing
- [Mocha](https://mochajs.org/) Test Framework
- [Chai](http://chaijs.com/) Assert library
- [Sinon](http://sinonjs.org/) Spies, stubs and mocks for JavaScript

### Libraries and tools
- [webpack](https://github.com/webpack/webpack) Module bundler
- [babel-core v6](https://github.com/babel/babel/tree/master/packages/babel-core) Compiler that enables to write most recent JS syntax
  - [babel-preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/) Set of plugins for ES215 JS
  - [babel-preset-stage-3](https://babeljs.io/docs/plugins/preset-stage-3/) Set of plugins with features categorized in at least  stage 3 of [TC39](https://github.com/tc39/proposals)
- [postcss-loader](https://github.com/postcss/postcss-loader) PostCSS loader for webpack
- [stylus](https://github.com/stylus/stylus) CSS preprocessor
- [stylus-loader](https://github.com/shama/stylus-loader) Stylus loader for webpack

### Back-end
- [npm-run-all](https://github.com/mysticatea/npm-run-all) A CLI to run multiple npm script in parallel or sequentially 
- [rimraf](https://github.com/isaacs/rimraf) `rm -rf` for node