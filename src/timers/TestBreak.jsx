import React from 'react'
import { NewTimer } from './counter/NewTimer'

function TestBreak({ showNotifications, debugMode }) {
    return (
        <NewTimer
            timerSeconds={10}
            showNotifications={showNotifications}
            reminderSeconds={10}
            debug={debugMode}
        />
    )
}

export default TestBreak
