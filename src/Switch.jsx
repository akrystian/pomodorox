import React from 'react'
import { LONG_BREAK, REGULAR, SHORT_BREAK, TEST_BREAK } from './Const'
import Blank from './timers/Blank'
import LongBreak from './timers/LongBreak'
import Regular from './timers/Regular'
import ShortBreak from './timers/ShortBreak'
import TestBreak from './timers/TestBreak';

export const Switch = ({ show }) => {
    const selectedElement = (componentName) => {
        if (componentName === LONG_BREAK) {
            return <LongBreak />
        } else if (componentName === SHORT_BREAK) {
            return <ShortBreak />
        } else if (componentName === REGULAR) {
            return <Regular />
        } else if (componentName === TEST_BREAK) {
            return <TestBreak />
        } else {
            return <Blank />
        }
    }

    return selectedElement(show)
}

export default Switch
