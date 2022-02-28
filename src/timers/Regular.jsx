import React from 'react'
import { NewTimer } from './counter/NewTimer'

function Regular({ showNotifications, debugMode, autoCount }) {
    return (
        <NewTimer
            timerSeconds={25 * 60}
            showNotifications={showNotifications}
            reminderSeconds={5 * 60}
            debug={debugMode}
            autoCount={autoCount}
        />
    )
}

export default Regular
