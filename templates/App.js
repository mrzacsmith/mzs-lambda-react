module.exports = `import React from 'react'

import './App.css'

const App = () => {
  return (
    <div className="App">
      {/* Remove everything from this line to line 37 */}
      <h2>Welcome Lambda student! This is filler, no need to keep it!</h2>
      <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">
        Visit the Lambda Llama home
      </a>
      <br />
      <img
        alt="Lambda loves our llamas!"
        style={{ width: 'auto', height: '300px' }}
        src="https://pbs.twimg.com/media/Egh41YNU4AADnsM.png"
      ></img>
      <div>
        <p>Created using Create-React-App</p>
        <p>Modified and maintained by Lambda School graduate:</p>
        <p>
          Zac Smith {' '}
          <a href="https://github.com/mrzacsmith" target="_blank" rel="noopener noreferrer">
            Github
          </a>{' '}
          ::{' '}
          <a href="https://www.npmjs.com/~mrzacsmith" target="_blank" rel="noopener noreferrer">
            NPM
          </a>{' '}
          ::{' '}
          <a href="https://twitter.com/mrzacsmith" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </p>
      </div>
      {/* Remove everything from line 8 to here */}
    </div>
  )
}

export default App`
