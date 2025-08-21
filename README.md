# Remove-Item -Recurse -Force .parcel-cache, dist

# Types of Testing (developer)
- Unit Testing
- Integration Testing
- End to End Testing (e2e Testing)


...

# Setting up testing in our app
 - Installed React Testing Library =>  ( npm i -D @testing-library/react)
 - Installed Jest =>  (npm i -D jest)
 - Installed Babel dependencies =>  ( npm install --save-dev babel-jest @babel/core @babel/preset-env)
 - Configure Babel =>  (babel.config.js)
 - Configure Parcel Config file to disable default babel transpilation => (.parcelrc)
 - Jest Configuration => (npx jest --init or npx create-jest@latest)
 - Install jsdom Library => (npm install --save-dev jest-environment-jsdom)
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - npm i -D @testing-library/jest-dom