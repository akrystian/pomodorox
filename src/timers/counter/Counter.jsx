import React from 'react'
import { Card } from 'react-bootstrap'

export const Counter = ({ minutes, seconds }) => {
    return (
        <Card className="m-2">
            <Card.Body>
                <code>
                    <h1>
                        {minutes}:{seconds}
                    </h1>
                </code>
            </Card.Body>
        </Card>
    )
}
