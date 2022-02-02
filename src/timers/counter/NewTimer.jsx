import React, { Fragment } from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import { useTimer } from 'react-timer-hook'

import { FaRedo, FaPause, FaPlay } from 'react-icons/fa'

export const NewTimer = ({
    timerSeconds,
    showNotifications,
    reminderSeconds = 300,
    debug = false,
}) => {
    const reminderSound =
        'https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg'
    const regularSound = reminderSound

    const calculateTime = (secondsOffset) => {
        const time = new Date()
        time.setSeconds(time.getSeconds() + secondsOffset)
        return time
    }

    const { seconds, minutes, start, pause, restart } = useTimer({
        expiryTimestamp: calculateTime(timerSeconds),
        onExpire: () => timeUpHook(reminderTimer, regularSound, false),
    })

    const reminderTimer = useTimer({
        expiryTimestamp: calculateTime(reminderSeconds),
        onExpire: () => timeUpHook(reminderTimer2, reminderSound, true),
        autoStart: false,
    })

    const reminderTimer2 = useTimer({
        expiryTimestamp: calculateTime(reminderSeconds),
        onExpire: () => timeUpHook(reminderTimer, reminderSound, true),
        autoStart: false,
    })

    const pauseAll = () => {
        pause()
        reminderTimer.pause()
        reminderTimer2.pause()
    }

    const timeUpHook = (timer, soundFile, isReminder) => {
        timer.restart(calculateTime(reminderSeconds))
        const sound = new Audio(soundFile)
        sound.play()
        showNotifications.showNotifications(isReminder)
    }

    const twoSign = (count) => {
        return count >= 10 ? count : '0' + count
    }

    const debugTimer = !debug ? null : (
        <Row>
            <Col>
                <h1>
                    {twoSign(reminderTimer.minutes)}:
                    {twoSign(reminderTimer.seconds)}
                </h1>
                <h1>
                    {twoSign(reminderTimer2.minutes)}:
                    {twoSign(reminderTimer2.seconds)}
                </h1>
            </Col>
        </Row>
    )

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
                        <Col>{debugTimer}</Col>
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
