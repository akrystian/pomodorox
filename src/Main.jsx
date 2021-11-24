import React from 'react'
import {
    Row,
    Col,
    ToggleButton,
    ToggleButtonGroup,
    Button,
    FormControl,
    InputGroup,
} from 'react-bootstrap'
import { LONG_BREAK, REGULAR, SHORT_BREAK, TEST_BREAK } from './Const'
import Aim from './Aim'
import { Switch } from './Switch'
import ReactNotifications from 'react-browser-notifications'

class Main extends React.Component {
    state = {
        labels: [],
        mode: [],
        numTask: 1,
        label: '',
    }

    componentDidMount() {
        var s = localStorage.getItem('state')
        if (s != null) {
            this.setState(JSON.parse(s))
        }
    }

    handleChange = (labels) => {
        this.setState({ labels: labels })
        localStorage.setItem('state', JSON.stringify(this.state))
    }

    handleChangeMode = (mode) => {
        this.setState({ mode: mode })
        localStorage.setItem('state', JSON.stringify(this.state))
    }

    handleChangeLabel = (label) => {
        this.setState({ label: label })
    }

    addTask = (label) => {
        if (label != null) {
            this.setState({ labels: this.labels.concat([label]) })
            localStorage.setItem('state', JSON.stringify(this.state))
        }
    }

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

        this.state.labels.forEach((it) => tasks.push(<Aim label={it} />))

        return (
            <div className="m-2">
                <Row>
                    <Col>{tasks}</Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                                value={this.label}
                                aria-label={this.label}
                                aria-describedby="basic-addon2"
                                onChange={(e) =>
                                    this.handleChangeLabel(e.target.value)
                                }
                            />
                            <InputGroup.Append>
                                <Button
                                    onClick={() => this.addTask(this.label)}
                                >
                                    +
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ToggleButtonGroup
                            className="flex-wrap"
                            type="radio"
                            name="options"
                            value={this.state.mode}
                            onChange={() =>
                                this.handleChangeMode(this.state.mode)
                            }
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
                            show={this.state.labels}
                            showNotifications={() => this.showNotifications()}
                        />
                        <ReactNotifications
                            onRef={(ref) => (ReactNotifications.n = ref)}
                            title="Yep!" // Required
                            body="Time is up!"
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
