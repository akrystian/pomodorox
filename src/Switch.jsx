import React from 'react'
import { LONG_BREAK, REGULAR, SHORT_BREAK, TEST_BREAK } from './Const'
import EventType from './EventType'
import Blank from './timers/Blank'
import LongBreak from './timers/LongBreak'
import Regular from './timers/Regular'
import ShortBreak from './timers/ShortBreak'
import TestBreak from './timers/TestBreak'

export const Switch = ({ show, showNotifications, debugMode, startHook }) => {
    const selectedElement = (componentName) => {
        if (componentName === LONG_BREAK) {
            console.log("Long break - does");
           // startHook("some", EventType.LONG_BREAK);
            return (
                <LongBreak
                    showNotifications={showNotifications}
                    debugMode={debugMode}
                />
            )
        } else if (componentName === SHORT_BREAK) {
            //startHook("some", EventType.SHORT_BREAK)
            return (
                <ShortBreak
                    showNotifications={showNotifications}
                    debugMode={debugMode}
                />
            )
        } else if (componentName === REGULAR) {
            //startHook("some", EventType.REGULAR)
            return (
                <Regular
                    showNotifications={showNotifications}
                    debugMode={debugMode}
                />
            )
        } else if (componentName === TEST_BREAK) {
            //startHook("some", EventType.TEST_BREAK)
            return (
                <TestBreak
                    showNotifications={showNotifications}
                    debugMode={debugMode}
                />
            )
        } else {
            return <Blank showNotifications={showNotifications} />
        }
    }

    return selectedElement(show)
}

export default Switch
