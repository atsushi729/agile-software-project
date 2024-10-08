## Procedure to Install and Start the Application

1. **Install Node.js and npm**: Ensure that you have Node.js and npm (Node Package Manager) installed. You can download and install them from [Node.js official website](https://nodejs.org/).

2. **Clone the Repository**: If you haven't already, clone the repository containing the application code to your local machine.

   ```bash
   git clone git@github.com:atsushi729/agile-software-project.git
   cd agile-software-project
   ```

3. **Install Dependencies**: Navigate to the project directory and run `npm install` to install the necessary dependencies listed in `package.json`.

   ```bash
   npm install
   ```

4. **Create the `.env` File**: In the server folder, create a file named `.env` and add your credential information as follows:

   ```bash
   DB_URI=MongoDB URI
   API_ENDPOINT="http://localhost:3000"
   PORT=3000
   OPENAI_API_KEY=Your OPENAI API KEY
   ```

5. **Start the Application**: Use the `start` script defined in `package.json` to start the application in development mode.

   ```bash
   cd server && node index.js
   cd client && npm start
   ```

6. **Open the Application**: Once the application has started, open your web browser and navigate to `http://localhost:3001` (the default port for `react-scripts`).

## Additional commands

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
