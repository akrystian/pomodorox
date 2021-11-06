import React, { useState } from 'react'
import { Row, Col, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { LONG_BREAK, REGULAR, SHORT_BREAK } from './Const'
import Aim from './Aim'
import { Switch } from './Switch'

function Main() {
    const [value, setValue] = useState([])
    const handleChange = (val) => setValue(val)

    return (
        <div className="m-2">
            <Row>
                <Col>
                    <Aim />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ToggleButtonGroup
                        className="flex-wrap"
                        type="radio"
                        name="options"
                        value={value}
                        onChange={handleChange}
                    >
                        <ToggleButton value={REGULAR}>Regular</ToggleButton>
                        <ToggleButton value={SHORT_BREAK}>
                            Short break
                        </ToggleButton>
                        <ToggleButton value={LONG_BREAK}>
                            Long break
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Switch show={value} />
                </Col>
            </Row>
        </div>
    )
}

export default Main
