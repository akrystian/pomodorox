import React, { useState } from "react"
import { Button, FormControl, InputGroup } from "react-bootstrap"

function Aim() {
    const states = ['todo', 'working', 'done']
    const colors = ['secondary', 'primary', 'success']
    const [isTodo, setTodo] = useState(0)

    const handleClick = () => {
        setTodo((isTodo + 1) % states.length);
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Task"
                    aria-label="Task"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button
                        type="checkbox"
                        onClick={() => handleClick()}
                        variant={colors[isTodo]}
                    >{states[isTodo]}</Button>
                </InputGroup.Append>

            </InputGroup>
        </div>
    );

}