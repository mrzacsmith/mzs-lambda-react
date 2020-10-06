module.exports = `import React from 'react'

import './App.css'

const App = () => {
  return (
    <div className="App">
      {/* Remove everything from this line to line 37 */}
      <div className="image-container">
        <img
          alt="Lambda loves our llamas!"
          src="https://assets-global.website-files.com/5cd091cfb5499f22bdf72905/5dcda59e63bb6ae5c9282801_small-red-logo.png"
        ></img>
      </div>
      <h2>
        Welcome <p className="welcome-bottom">Lambda student!</p>
      </h2>
      <h4>Your React Application is Ready</h4>
      <h4>Now go work your magic!</h4>
      <p className="filler-text">This is filler, no need to keep it!</p>
      <div className="footer">
        <a
          href="https://lambdaschool.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Lambda Llama home
        </a>
        <br />
        <div>
          <p>Created using Create-React-App</p>
          <p>Modified and maintained by Lambda School graduate Zac Smith</p>
          <p>
            <a
              href="https://github.com/mrzacsmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            ::{" "}
            <a
              href="https://www.npmjs.com/~mrzacsmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM
            </a>{" "}
            ::{" "}
            <a
              href="https://twitter.com/mrzacsmith"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
      {/* Remove everything from line 8 to here */}
    </div>
  );
};

export default App;`;
