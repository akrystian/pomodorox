import React from 'react'
import { NewTimer } from './counter/NewTimer'

function Regular(showNotifications) {
    return (
        <NewTimer
            timerSeconds={25 * 60}
            showNotifications={showNotifications}
            reminderSeconds={5 * 60}
        />
    )
}

export default Regular
