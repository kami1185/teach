export default {
    testEnvironment: 'jsdom', // javascript is the enviroment we'll use and dom for manipulating elements
    // collectCoverage: true,
    // collectCoverageFrom: ['src/**/*.{js,jsx}'],
    // coverageDirectory: 'coverage',

    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(* .).(spec|test|tests).[jt]s?(x)'
    ], // indicate where are the files, in this case creating __tests__ folder 
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|webp)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // invoke the jest.setup.js in root directory
    // inside the file we importing the testing library with jest-dom
}