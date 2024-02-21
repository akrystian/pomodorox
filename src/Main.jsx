import React from 'react'
import {
    Row,
    Col,
    ToggleButton,
    ToggleButtonGroup,
    ButtonGroup,
    Button,
    FormControl,
    InputGroup,
    Badge
} from 'react-bootstrap'
import {
    FaMinusCircle,
    FaPlusCircle,
} from 'react-icons/fa'

import { LONG_BREAK, REGULAR, SHORT_BREAK, TEST_BREAK, VERSION } from './Const'
import Aim from './Aim'
import { Switch } from './Switch'
import ReactNotifications from 'react-browser-notifications'
import { v4 as uuidv4 } from 'uuid'
import Event from './Event'
import EventStatus from './EventStatus'

class Main extends React.Component {
    state = {
        labels: [],
        mode: [],
        numTask: 1,
        label: '',
        estimate: 0,
        selected: null,
        notificationsState: {
            title: 'Yep!',
            body: 'Time is up!',
        },
        events: [],
        version: VERSION,
    }

    handleEvent = (label, task, status) => {
        this.saveEvents({
            timestamp: new Date(),
            label: label,
            task: task,
            status: status,
        })
    }

    saveEvents = (event) => {
        this.setState((previousState) => ({
            events: previousState.events.concat([
                {
                    timestamp: event.timestamp,
                    label: event.label.toString(),
                    task: event.task.toString(),
                    status: event.status.toString(),
                },
            ]),
        }))
    }

    clearEvents = () => {
        this.setState(() => ({
            events: []
        }))
    }

    componentDidMount() {
        var stateString = localStorage.getItem('state')
        if (stateString != null) {
            const savedState = JSON.parse(stateString)
            if (savedState.version >= VERSION) {
                this.setState(savedState)
            }
        }
    }

    handleChange = (labels) => {
        this.setState({ labels: labels })
        localStorage.setItem('state', JSON.stringify(this.state))
    }

    messageLabels = {
        timeUp: {
            title: 'Yep!',
            body: 'Time is up!',
        },
        reminder: {
            title: 'Reminder!!!',
            body: 'You should run the timer!!!!',
        },
    }

    updateLabels = (newTitle, newBody) =>
        this.setState({
            notificationsState: { title: newTitle, body: newBody },
        })

    handleChangeMode = (mode) => {
        this.setState({ mode: mode })
        localStorage.setItem('state', JSON.stringify(this.state))
        this.start('label', mode)
    }

    handleChangeLabel = (label) => {
        this.setState({ label: label })
    }

    handleChangeEstimate = (delta) => {
        this.setState((prevState) => ({ estimate: (prevState.estimate + delta) }))
    }

    genId = () => {
        return uuidv4()
    }

    addTask = (label) => {
        this.createEvent(label)
    }

    start = (label, eventType) => {
        console.log("create start " + label)
        this.handleEvent(label, eventType, EventStatus.STARTED)
    }

    createEvent = (label) => {
        if (label != null && label !== '') {
            this.setState((prevState) => ({
                labels: prevState.labels.concat([
                    { id: this.genId(), label: label, done: false, points: 0, estimate: prevState.estimate },
                ]),
                label: '',
            }))
            localStorage.setItem('state', JSON.stringify(this.state))
        }
    }

    showNotifications = (isReminder) => {
        if (isReminder) {
            this.setupRemider()
        } else {
            this.setupTimesUp()
        }
        if (ReactNotifications.n.supported()) {
            ReactNotifications.n.show()
        }
    }

    setupRemider = () =>
        this.updateLabels(
            this.messageLabels.reminder.title,
            this.messageLabels.reminder.body
        )

    setupTimesUp = () =>
        this.updateLabels(
            this.messageLabels.timeUp.title,
            this.messageLabels.timeUp.body
        )

    handleNotificationClick = (event) => {
        ReactNotifications.n.close(event.target.tag)
    }

    removeTask = (index) => {
        if (
            this.state.labels.length > 0 &&
            index >= 0 &&
            this.state.labels.length > index
        ) {
            var copy = [...this.state.labels]
            copy.splice(index, 1)
            this.setState({ labels: copy })
            localStorage.setItem('state', JSON.stringify(this.state))
        }
    }

    moveUpTask = (index) => {
        if (
            this.state.labels.length > 1 &&
            index > 0 &&
            this.state.labels.length > index
        ) {
            var copy = [...this.state.labels]
            var value = copy[index]
            copy[index] = copy[index - 1]
            copy[index - 1] = value
            this.setState({ labels: copy })
            localStorage.setItem('state', JSON.stringify(this.state))
        }
    }

    moveDownTask = (index) => {
        if (
            this.state.labels.length > 1 &&
            index >= 0 &&
            this.state.labels.length > index + 1
        ) {
            var copy = [...this.state.labels]
            var value = copy[index]
            copy[index] = copy[index + 1]
            copy[index + 1] = value
            this.setState({ labels: copy })
            localStorage.setItem('state', JSON.stringify(this.state))
        }
    }

    toggleDone = (index) => {
        if (
            this.state.labels.length >= 0 &&
            index >= 0 &&
            this.state.labels.length > index
        ) {
            var copy = [...this.state.labels]
            copy[index].done = !copy[index].done
            this.setState({ labels: copy })
            localStorage.setItem('state', JSON.stringify(this.state))
        }
    }

    estimatedSum = () => {
        const sum = this.state.labels.map(it => it.estimate).reduce((accumulator, current) => {
            return accumulator + current;
        }, 0);
        return sum;
    }

    select = (index) => {
        if (
            this.state.labels.length >= 0 &&
            index >= 0 &&
            this.state.labels.length > index
        ) {
            var selected = this.state.labels[index]
            if (!selected.done) {
                this.setState({ selected: selected.id })
                localStorage.setItem('state', JSON.stringify(this.state))
            }
        }
    }

    plusPoints = (index) => {
        if (
            this.state.labels.length > 0 &&
            index >= 0 &&
            this.state.labels.length > index
        ) {
            var copy = [...this.state.labels]
            copy[index].points = copy[index].points + 1
            this.setState({ labels: copy })
            localStorage.setItem('state', JSON.stringify(this.state))
        }
    }

    minusPoints = (index) => {
        if (
            this.state.labels.length > 0 &&
            index >= 0 &&
            this.state.labels.length > index
        ) {
            var copy = [...this.state.labels]
            copy[index].points = copy[index].points - 1
            this.setState({ labels: copy })
            localStorage.setItem('state', JSON.stringify(this.state))

        }
    }

    debugElement = (debugMode) => {
        if (this.props.debugMode) {
            return (
                <ToggleButton
                    value={TEST_BREAK}
                    disabled={this.state.selected === ''}
                >
                    Test break
                </ToggleButton>
            )
        }
    }

    currentTaskId = () => {
        return this.state.labels.findIndex(
            (it) => it.id === this.state.selected
        )
    }

    currentTask = () => {
        const current = this.state.labels
            .filter((it) => it.id === this.state.selected)
            .map((it) => it.label)
        return (
            <Row>
                <Col>
                    <h1>
                        <strong>Current: {current}</strong>
                    </h1>
                </Col>
            </Row>
        )
    }

    handleEnterKeyPress = (target) => {
        if (target.charCode === 13) {
            this.addTask(this.state.label)
        }
    }

    render() {
        var incrementer = 0
        const tasks = this.state.labels.map((it) => (
            <Aim
                key={it.id}
                index={incrementer++}
                label={it}
                deleteHook={this.removeTask}
                plusPointHook={this.plusPoints}
                minusPointHook={this.minusPoints}
                plusEstimateHook={this.plusEstimate}
                minusEstimateHook={this.minusEstimate}
                upHook={this.moveUpTask}
                downHook={this.moveDownTask}
                toggleDone={this.toggleDone}
                select={this.select}
                selected={it.id === this.state.selected}
            />
        ))

        const eventTasks = this.state.events.map((it) => <Event event={it} />)

        return (
            <div className="m-2">
                {this.currentTask()}
                <Row>
                    <Col>
                        <Switch
                            show={this.state.mode}
                            showNotifications={(isRemider) =>
                                this.showNotifications(isRemider)
                            }
                            debugMode={this.props.debugMode}
                            autoCount={() => {
                                const index = this.currentTaskId()
                                this.plusPoints(index)
                            }}
                            startHook={(eventType) => this.start(this.state.label, eventType)}
                        />
                        <ReactNotifications
                            onRef={(ref) => (ReactNotifications.n = ref)}
                            title={this.state.notificationsState.title} // Required
                            body={this.state.notificationsState.body}
                            icon="icon.png"
                            timeout="5000"
                            onClick={(event) =>
                                this.handleNotificationClick(event)
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ToggleButtonGroup
                            className="flex-wrap"
                            type="radio"
                            name="options"
                            value={this.state.mode}
                            onChange={this.handleChangeMode}
                        >
                            <ToggleButton
                                value={REGULAR}
                                disabled={this.state.selected === ''}
                            >
                                Regular
                            </ToggleButton>
                            <ToggleButton
                                value={SHORT_BREAK}
                                disabled={this.state.selected === ''}
                            >
                                Short break
                            </ToggleButton>
                            <ToggleButton
                                value={LONG_BREAK}
                                disabled={this.state.selected === ''}
                            >
                                Long break
                            </ToggleButton>
                            {this.debugElement(this.props.debugMode)}
                        </ToggleButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>{tasks}</Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                                value={this.state.label}
                                aria-label={this.state.label}
                                aria-describedby="basic-addon2"
                                onChange={(e) =>
                                    this.handleChangeLabel(e.target.value)
                                }
                                onKeyPress={this.handleEnterKeyPress}
                            />
                            {' '}
                            <Badge pill variant="secondary">
                                {this.state.estimate}
                            </Badge>
                            {' '}
                            <ButtonGroup vertical={true}>
                                <Button
                                    variant="secondary"
                                    onClick={() => this.handleChangeEstimate(1)}
                                    size="sm"

                                >
                                    <FaPlusCircle />
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => this.handleChangeEstimate(-1)}
                                    size="sm"
                                >
                                    <FaMinusCircle />
                                </Button>
                            </ButtonGroup>
                            {' '}
                            <InputGroup.Append>
                                <Button
                                    onClick={() =>
                                        this.addTask(this.state.label, this.state.estimate)
                                    }
                                >
                                    +
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <em>Estimated points sum: {this.estimatedSum()} (Aprox hours: {this.estimatedSum() / 2})</em>
                    </Col>
                </Row>
                {eventTasks}
            </div>
        )
    }
}

export default Main
