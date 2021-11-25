import React, { Fragment } from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import { useTimer } from 'react-timer-hook'

import { FaRedo, FaPause, FaPlay } from 'react-icons/fa'

export const NewTimer = ({ timerSeconds, showNotifications }) => {
    const reminderSeconds = 300

    const calculateTime = (secondsOffset) => {
        const time = new Date()
        time.setSeconds(time.getSeconds() + secondsOffset)
        return time
    }

    const { seconds, minutes, start, pause, restart } = useTimer({
        expiryTimestamp: calculateTime(timerSeconds),
        onExpire: () => timeUpHook(),
    })

    const reminderTimer = useTimer({
        expiryTimestamp: calculateTime(reminderSeconds),
        onExpire: () => reminderTimeUpHook(reminderTimer2),
        autoStart: false,
    })

    const reminderTimer2 = useTimer({
        expiryTimestamp: calculateTime(reminderSeconds),
        onExpire: () => reminderTimeUpHook(reminderTimer),
        autoStart: false,
    })

    const pauseAll = () => {
        pause()
        reminderTimer.pause()
        reminderTimer2.pause()
    }

    const reminderTimeUpHook = (timer) => {
        console.log('reminderTimeUpHook')
        showNotifications.showNotifications()
        const sound = new Audio(
            'https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg'
        )
        sound.play()
        timer.restart(calculateTime(reminderSeconds))
    }

    const timeUpHook = () => {
        const sound = new Audio(
            'https://actions.google.com/sounds/v1/alarms/radiation_meter.ogg'
        )
        sound.play()
        showNotifications.showNotifications()
    }

    const twoSign = (count) => {
        return count >= 10 ? count : '0' + count
    }

    return (
        <Fragment>
            <Card className="m-2">
                <Card.Body>
                    <Row>
                        <Col>
                            <code>
                                <h1>
                                    {twoSign(minutes)}:{twoSign(seconds)}
                                </h1>
                            </code>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button onClick={start}>
                                <FaPlay />
                            </Button>
                            <Button onClick={pause}>
                                <FaPause />
                            </Button>
                            <Button variant="success" onClick={pauseAll}>
                                <FaPause />
                            </Button>
                            <Button
                                onClick={() => {
                                    const time = new Date()
                                    time.setSeconds(time.getSeconds() + 300)
                                    restart(time)
                                }}
                            >
                                <FaRedo />
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default NewTimer
