import React, { useState } from 'react'
import { Badge, Button, ButtonGroup, Card } from 'react-bootstrap'
import {
    FaArrowDown,
    FaArrowUp,
    FaMinusCircle,
    FaPlusCircle,
    FaTrash,
} from 'react-icons/fa'

export const Aim = ({
    index,
    label,
    deleteHook,
    upHook,
    downHook,
    minusPointHook,
    plusPointHook,
}) => {
    const states = ['todo', 'working', 'done']
    const colors = ['secondary', 'primary', 'success']
    const [isTodo, setTodo] = useState(0)

    const handleClick = () => {
        setTodo((isTodo + 1) % states.length)
    }

    return (
        <>
            <style type="text/css">
            {`
            .card-body {
              padding: 0.1rem 0.1rem;  
             }
            `}
            </style>
            <Card className="m-2">
                <Card.Body>
                    <div className="float-left">
                        <Button
                            type="checkbox"
                            onClick={() => handleClick()}
                            variant={colors[isTodo]}
                            size="sm"
                        >
                            {states[isTodo]}
                        </Button>
                        <ButtonGroup>
                            <Button
                                variant="secondary"
                                onClick={() => upHook(index)}
                                size="sm"
                            >
                                <FaArrowUp />
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={() => downHook(index)}
                                size="sm"
                            >
                                <FaArrowDown />
                            </Button>
                        </ButtonGroup>
                        <Button
                            variant="danger"
                            onClick={() => deleteHook(index)}
                            size="sm"
                        >
                            <FaTrash />
                        </Button>
                        <ButtonGroup>
                            <Button
                                variant="secondary"
                                onClick={() => plusPointHook(index)}
                                size="sm"
                            >
                                <FaPlusCircle />
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => minusPointHook(index)}
                                size="sm"
                            >
                                <FaMinusCircle />
                            </Button>
                        </ButtonGroup>{' '}
                        <Badge pill variant="secondary">
                            {label.points}
                        </Badge>
                        {' '}
                        {label.label}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Aim
