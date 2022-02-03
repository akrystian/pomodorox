import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'

export const Aim = ({ index, label, deleteHook }) => {
    const states = ['todo', 'working', 'done']
    const colors = ['secondary', 'primary', 'success']
    const [isTodo, setTodo] = useState(0)

    const handleClick = () => {
        setTodo((isTodo + 1) % states.length)
    }

    return (
        <Card className="m-2">
            <Card.Body>
                <div className="float-left">
                    <Button
                        type="checkbox"
                        onClick={() => handleClick()}
                        variant={colors[isTodo]}
                    >
                        {states[isTodo]}
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="danger" onClick={() => deleteHook(index)}>
                        <FaTrash />
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {label}
                </div>
            </Card.Body>
        </Card>
    )
}

export default Aim
