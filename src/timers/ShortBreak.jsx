import React from 'react'
import { NewTimer } from './counter/NewTimer'

function ShortBreak({ showNotifications, debugMode }) {
    return (
        <NewTimer
            timerSeconds={5 * 60}
            showNotifications={showNotifications}
            reminderSeconds={1 * 30}
            debug={debugMode}
        />
    )
}

export default ShortBreak
