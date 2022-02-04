import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Card } from 'react-bootstrap'
import {
    FaArrowDown,
    FaArrowUp,
    FaMinusCircle,
    FaPlusCircle,
    FaTrash,
} from 'react-icons/fa'

export const Aim = ({ index, label, deleteHook, upHook, downHook, minusPointHook, plusPointHook }) => {
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
                    <ButtonGroup>
                        <Button variant="secondary" onClick={() => upHook(index)}>
                            <FaArrowUp />
                        </Button>

                        <Button variant="secondary" onClick={() => downHook(index)}>
                            <FaArrowDown />
                        </Button>
                    </ButtonGroup>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <ButtonGroup>
                        <Button variant="secondary" onClick={() => plusPointHook(index)}>
                            <FaPlusCircle />
                        </Button>
                        <Button variant="secondary" onClick={() => minusPointHook(index)}>
                            <FaMinusCircle />
                        </Button>
                    </ButtonGroup>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {label.label}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Badge pill variant="secondary">
                        {label.points}
                    </Badge>
                    
                </div>
            </Card.Body>
        </Card>
    )
}

export default Aim
