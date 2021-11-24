import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

export const Aim = (label) => {
    const states = ['todo', 'working', 'done']
    const colors = ['secondary', 'primary', 'success']
    const [isTodo, setTodo] = useState(0)

    const handleClick = () => {
        setTodo((isTodo + 1) % states.length)
    }

    return (
        <Card className="m-2">
            <Card.Body>
                {label}
                <Button
                    type="checkbox"
                    onClick={() => handleClick()}
                    variant={colors[isTodo]}
                >
                    {states[isTodo]}
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Aim
