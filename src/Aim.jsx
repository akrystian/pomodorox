import React from 'react'
import { Badge, Button, ButtonGroup, Card, ToggleButton } from 'react-bootstrap'
import {
    FaArrowDown,
    FaArrowUp,
    FaHourglassStart,
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
    toggleDone,
    select,
    selected,
}) => {
    return (
        <>
            <style type="text/css">
                {`
                    .card-body {
                        padding: 0.1rem 0.1rem;
                    }
                `}
            </style>
            <Card
                className="m-2"
                border={label.done ? 'success' : selected ? 'primary' : ''}
                bg={label.done ? 'success' : selected ? 'primary' : ''}
            >
                <Card.Body>
                    <div className="float-left">
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="light-outline"
                            checked={label.done}
                            value="1"
                            onChange={(e) => toggleDone(index)}
                        ></ToggleButton>
                        <Button
                            variant="secondary"
                            size="sm"
                            disabled={label.done}
                            onClick={(e) => select(index)}
                        >
                            <FaHourglassStart />
                        </Button>{' '}
                        <ButtonGroup vertical={true}>
                            <Button
                                variant="secondary"
                                onClick={() => plusPointHook(index)}
                                size="sm"
                                disabled={label.done}
                            >
                                <FaPlusCircle />
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => minusPointHook(index)}
                                size="sm"
                                disabled={label.done}
                            >
                                <FaMinusCircle />
                            </Button>
                        </ButtonGroup>{' '}
                        <Badge pill variant="secondary">
                            {label.points}
                        </Badge>{' '}
                        <strong>{label.label}</strong>
                    </div>
                    <div className="float-right">
                        <ButtonGroup vertical={true}>
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
                        </ButtonGroup>{' '}
                        <Button
                            variant="danger"
                            onClick={() => deleteHook(index)}
                            size="sm"
                        >
                            <FaTrash />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Aim
