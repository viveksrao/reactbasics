# What is React?
React is a JavaScript library for building user interfaces (UIs). Some people use it as the V in MVC. React was built to solve one problem: building large applications with data that changes over time. React was originally conceived at Facebook and heavily used and battle-tested on products like the Facebook website and also Instagram. These applications contain complex UIs, and React was built to simplify some of the process behind developing these apps.

## Project covers some of the features React offers:

1. Write React components
2. Render data to the page
3. Make components communicate – how to pass data from one component to another
4. Handle user events
5. Capture user input
6. Talk to remote servers

### Component-based Architecture
When using React, we solve problems using something called component-based architecture. In React, we solve problems by creating components. If a component gets too complex, we break it into smaller, simpler components.

### What Is a React Component?
A component in React works similarly to JavaScript functions: It generates an HTML output every time it is invoked.

### The Virtual DOM Explained
The virtual DOM is an **in-memory representation** of real DOM elements generated by React components before any changes are made to the page. It's a step that happens between the render function being called and the displaying of elements on the screen. A components render method returns some markup, but its not the final HTML yet. It's the in-memory representation of what will become real elements. Then that output will be transformed into real HTML, which is what gets displayed in the browser. The virtual DOM is what allows React to be fast. It does this by means of virtual DOM diffing.

### The Virtual DOM in Action
Virtual DOM **diffing** allows React to **minimize changes** to the DOM as a result of user actions – therefore, **increasing browser performance**.

#### Writing Our First React Component
Components in React are JavaScript classes that inherit from the *React.Component* base class. Every component in React needs to include a render function. This is a must have for every component we write.

#### Rendering Our First React Component
We use ***ReactDOM*** to render components to our HTML page as it reads output from a supplied React component and adds it to the DOM. The ReactDOM.render method takes two arguments, first the name of the Component and second the target container where the component will be rendered to.

#### Referencing the Component
Every time we create a new React component, we use it by writing an element named after the class.

# Setting up Webpack for React
Set up the front end tools for a React development environment with NPM, Webpack and Babel. Also includes helpful features developers use when building React Apps, including running your app on a development server, bundling CSS together with your JavaScript, and hot reloading your app, so you can modify code and instantly view changes without having to refresh the browser or restart the app.

When building React apps, developers usually add a build step to their front-end workflow that loads modules, transpiles, identifies code, and creates production ready bundles of project assets. Webpack is the main build tool adopted by the React community, but there are other popular tools like Gulp and Browserify.

The JSX Syntax (JSX allows us to include HTML in our JavaScript) commonly used to build React components, is not supported in browsers, so we use the Babel transpiler to translate JSX into plain JavaScript browsers can understand. Babel lets us use the expressive JSX Syntax and useful ES2015 features. Babel is modular and split up into plugins and presets

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
