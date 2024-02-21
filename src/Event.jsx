import React from 'react'
import { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'

export const Event = ({ event }) => {
    return (
        <Fragment>
            <Row>
                <Col>{event.timestamp.toString()}</Col>
                <Col>{event.label ? event.label.toString() : 'No label'}</Col> 
                <Col>{event.task.toString()}</Col>
                <Col>{event.status? event.status.toString(): 'No status'}</Col>
            </Row>
        </Fragment>
    )
}

export default Event
