# Setting up Webpack for React
Set up the front end tools for a React development environment with NPM, Webpack and Babel. Also includes helpful features developers use when building React Apps, including running your app on a development server, bundling CSS together with your JavaScript, and hot reloading your app, so you can modify code and instantly view changes without having to refresh the browser or restart the app.

When building React apps, developers usually add a build step to their front-end workflow that loads modules, transpiles, identifies code, and creates production ready bundles of project assets. Webpack is the main build tool adopted by the React community, but there are other popular tools like Gulp and Browserify.

The JSX Syntax commonly used to build React components, is not supported in browsers, so we use the Babel transpiler to translate JSX into plain JavaScript browsers can understand. Babel lets us use the expressive JSX Syntax and useful ES2015 features. Babel is modular and split up into plugins and presets

babel-core is the Babel transpiler.  
babel-loader is the webpack loader used to transform JavaScript files.
babel-preset-es2015 translates ES2015 syntax to ES5.   
babel-preset-react transforms JSX to JavaScript within React.
.babelrc is the Babel Configuration file which lets it know to make transformations using the React and 2015 presets.  
webpack-dev-server creates a build of React App according to webpack configuration, and runs it in the browser.
style-loader embeds the CSS in bundle.js.    
css-loader parses the CSS and applies it to the DOM.  


## Resources
https://webpack.github.io/  
https://webpack.github.io/docs/installation.html  
https://webpack.github.io/docs/configuration.html#configuration-object-content  
https://webpack.github.io/docs/multiple-entry-points.html  
https://github.com/webpack/docs/wiki/configuration#entry  
https://webpack.github.io/docs/webpack-dev-server.html  
https://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli  
https://github.com/webpack/style-loader  

https://facebook.github.io/react/  
https://babeljs.io/
