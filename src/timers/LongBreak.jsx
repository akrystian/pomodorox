import React from 'react'
import { NewTimer } from './counter/NewTimer'

function LongBreak({ showNotifications, debugMode }) {
    return (
        <NewTimer
            timerSeconds={10 * 60}
            showNotifications={showNotifications}
            reminderSeconds={5 * 60}
            debug={debugMode}
        />
    )
}

export default LongBreak
