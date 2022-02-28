import React from 'react'
import { NewTimer } from './counter/NewTimer'

function TestBreak({ showNotifications, debugMode, autoCount }) {
    return (
        <NewTimer
            timerSeconds={10}
            showNotifications={showNotifications}
            reminderSeconds={10}
            debug={debugMode}
            autoCount={autoCount}
        />
    )
}

export default TestBreak
