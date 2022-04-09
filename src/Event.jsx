import React from 'react'
import { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'

export const Event = ({ event }) => {
    return (
        <Fragment>
            <Row>
                <Col>{event.timestamp.toString()}</Col>
                <Col>{event.task.toString()}</Col>
                <Col>{event.status.toString()}</Col>
            </Row>
        </Fragment>
    )
}

export default Event
