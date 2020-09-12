module.exports = `import React from 'react'

import './App.css'

function App() {
  return (
    <div className="App">
      {/* Remove everything from this comment  ------ */}
      <h2>Welcome Lambda student! This is filler, no need to keep it!</h2>
      <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">
        Visit the Lambda Llama home
      </a>
      <br />
      <img
        alt="Lambda loves our llamas!"
        style={{ width: '300px', height: 'auto' }}
        src="https://images.pexels.com/photos/1578484/pexels-photo-1578484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
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
      {/* ------ to this comment! */}
    </div>
  )
}

export default App`
