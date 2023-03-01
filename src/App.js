import React, { Component } from 'react'
import Form from './components/Form'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="App">
              <h1>CV Aplication</h1>
              <Form title="React" />
            </div>
        )
    }
}

export default App
