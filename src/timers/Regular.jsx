import React from 'react'
import { NewTimer } from './counter/NewTimer'

function Regular({ showNotifications, debugMode, autoCount }) {
    return (
        <NewTimer
            timerSeconds={25 * 60}
            showNotifications={showNotifications}
            reminderSeconds={1 * 30}
            debug={debugMode}
            autoCount={autoCount}
        />
    )
}

export default Regular
