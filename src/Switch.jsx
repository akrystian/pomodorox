import React from 'react'
import { LONG_BREAK, REGULAR, SHORT_BREAK, TEST_BREAK } from './Const'
import Blank from './timers/Blank'
import LongBreak from './timers/LongBreak'
import Regular from './timers/Regular'
import ShortBreak from './timers/ShortBreak'
import TestBreak from './timers/TestBreak'

export const Switch = ({ show, showNotifications }) => {
    const selectedElement = (componentName) => {
        if (componentName === LONG_BREAK) {
            return <LongBreak showNotifications={showNotifications} />
        } else if (componentName === SHORT_BREAK) {
            return <ShortBreak showNotifications={showNotifications} />
        } else if (componentName === REGULAR) {
            return <Regular showNotifications={showNotifications} />
        } else if (componentName === TEST_BREAK) {
            return <TestBreak showNotifications={showNotifications} />
        } else {
            return <Blank showNotifications={showNotifications} />
        }
    }

    return selectedElement(show)
}

export default Switch
