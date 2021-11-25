import React from 'react'
import {
    Row,
    Col,
    ToggleButton,
    ToggleButtonGroup,
    Button,
} from 'react-bootstrap'
import { LONG_BREAK, REGULAR, SHORT_BREAK, TEST_BREAK } from './Const'
import Aim from './Aim'
import { Switch } from './Switch'
import ReactNotifications from 'react-browser-notifications'

class Main extends React.Component {
    state = {
        value: [],
        numTask: 1,
    }

    handleChange = (val) => this.setState({ value: val })

    addTask = () => this.setState({ numTask: this.state.numTask + 1 })

    showNotifications = () => {
        if (ReactNotifications.n.supported()) {
            ReactNotifications.n.show()
        }
    }

    handleNotificationClick = (event) => {
        ReactNotifications.n.close(event.target.tag)
    }

    render() {
        const tasks = []

        for (let index = 0; index < this.state.numTask; index++) {
            tasks.push(<Aim />)
        }

        return (
            <div className="m-2">
                <Row>
                    <Col>{tasks}</Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            className="float-right"
                            variant="secondary"
                            onClick={() => this.addTask()}
                        >
                            +
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ToggleButtonGroup
                            className="flex-wrap"
                            type="radio"
                            name="options"
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <ToggleButton value={REGULAR}>Regular</ToggleButton>
                            <ToggleButton value={SHORT_BREAK}>
                                Short break
                            </ToggleButton>
                            <ToggleButton value={LONG_BREAK}>
                                Long break
                            </ToggleButton>
                            <ToggleButton value={TEST_BREAK}>
                                Test break
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Switch
                            show={this.state.value}
                            showNotifications={() => this.showNotifications()}
                        />
                        <ReactNotifications
                            onRef={(ref) => (ReactNotifications.n = ref)}
                            body="Time is up!"
                            title="Yep!" // Required
                            icon="icon.png"
                            timeout="5000"
                            onClick={(event) =>
                                this.handleNotificationClick(event)
                            }
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Main
