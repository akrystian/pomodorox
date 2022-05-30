import React from 'react'
import { Navbar, Button } from 'react-bootstrap'
import axios from 'axios'

class Footer extends React.Component {
    state = {
        license: ""
    }

    async componentDidMount() {
        const license = await axios.get('https://raw.githubusercontent.com/akrystian/pomodorox/master/LICENSE')
            .then((response) =>
                response.data
                    .split(`\n`)
                    .filter((_, index) => index === 2)
                    .at(0)

            )
            .catch((error) => {
                console.log(error);
                return 'PomidoroX'
            });

        await this.setStateAsync({ license: license })
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    render() {
        return <Navbar bg="light" variant="light" >
            {this.state.license}
            < Button variant="link" onClick={() => this.props.setDebugMode(true)} size="sm" >
                .
            </Button >
        </Navbar >
    }
}

export default Footer
