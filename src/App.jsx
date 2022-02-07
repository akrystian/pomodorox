import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

class App extends React.Component {
    state = {
        debugMode: false,
    }

    setDebugMode = (on) => {
        this.setState({ debugMode: on })
    }

    render() {
        return (
            <div className="App">
                <Header name={'PomodoroX'} />
                <Main debugMode={this.state.debugMode} />
                <Footer setDebugMode={this.setDebugMode} />
            </div>
        )
    }
}

export default App
