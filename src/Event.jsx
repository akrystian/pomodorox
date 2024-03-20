import React from 'react'
import { Fragment } from 'react'

export const Event = ({ event }) => {
    return (
        <Fragment>
            <tr>
                <td>{new Date(event.timestamp).toLocaleTimeString()}</td>
                <td>{event.label ? event.label.toString() : 'No label'}</td>
                <td>{event.task.toString()}</td>
                <td>{event.status ? event.status.toString() : 'No status'}</td>
            </tr>
        </Fragment>
    )
}

export default Event
