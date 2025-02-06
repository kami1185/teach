import jestconfig from './../../../assets/jest/jest-config-js.webp'
import babelconfig from './../../../assets/jest/babel-config-json.webp'
import eslint from './../../../assets/jest/eslint.webp'

export default function Introduction() {
  return (
    <>
      Jest Configuration
      <ul>
        <li>
          <h2>Install Testing Library and Jest</h2>
          <h3>Install and setup Jest </h3>
            <p>Install Jest Framework:</p>
            <p>The React Testing Library is a very lightweight solution for testing React components. 
              It provides light utility functions on top of react-dom and react-dom/test-utils, 
              in a way that encourages better testing practices. </p>
            <p>1. npm install --save-dev jest</p>
            <p>2. npm install --save-dev jest-environment-jsdom</p>
            <p>3. npm install --save-dev @testing-library/dom</p>
            <p>4. npm install --save-dev @testing-library/react</p>
            <p>5. npm install ts-jest @types/jest --save-dev</p>
          
          <h3>Testing the components </h3>
            <p>6. npm install ts-node @testing-library/jest-dom --save-dev</p>
            <p>7. npm install identity-obj-proxy --save-dev</p>
            <p>8. npm install @testing-library/user-event --save-dev</p>
            <p>9. Create a file named <strong>jest.config.js</strong>  in the root folder and add the following code configuration:</p>
            <img src={jestconfig} alt="" />

          <h3>Integrate Jest with React testing Library</h3>
            <p>10. Create a file named jest.setup.jsenter in the root folder and add the following line of code: </p>
            <p>import '@testing-library/jest-dom'</p>

          <h3>Install Babel</h3>
            <p>we install babel/preset-react and @babel/preset-env package. This will convert our JSX syntax into Javascript.</p>
            <p>11. npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/preset-react</p>
            <p>Create a file named <strong>babel.config.json</strong>  in the root folder and add the following code configuration: </p>
            <img src={babelconfig} alt="" />

          <h3>Integrate Jest with ESLint</h3>
            <p>Setup ESLint to help us clean code. By default if you use Jest with Eslint installed Eslint will give 
              errors because with Jest tests we use some functions directly without importing them, and ESLint doesn't 
              accept that, therefore we need to integrate Eslint with Jest
            </p>
            <p>Io install eslint-plugin-jest which will make Eslint recognise Jest code:</p>
            <p>npm install --save-dev eslint-plugin-jest</p>
            <ul>
              <li>In the eslintrc.json add "jest" in the plugins array</li>
              <li>In the eslintrc.json add "plugin:jest/recommended", in the extends to use recommended jest syntax</li>
              <li>In the eslintrc.json in the env entry add "jest/globals": true to enable jest in our eslint environment</li>                
              <img src={eslint} alt="" />
            </ul>

        </li>
        <li>
          <h3>TDD Test Driven Development</h3>
          <p>
            Is a software development process where you write tests before writing the code software.
          </p>
        </li>
        <li>
          <p>test(name, fn, timeout)</p>
          <p>name: first argument is the test name </p>
          <p>fn: second argument is a function that contains the expectations to test </p>
          <p>timeout: is optional and specifying how long to wait before aborting the test</p>
        </li>
        <li>
          <p>describe(name, fn, timeout)</p>
          <p>name: first argument is the test name </p>
          <p>fn: second argument is a function that contains the expectations to test </p>
          <p>timeout: is optional and specifying how long to wait before aborting the test</p>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  )
}

