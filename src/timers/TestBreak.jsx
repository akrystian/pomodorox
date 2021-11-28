import React from 'react'
import { NewTimer } from './counter/NewTimer'

function TestBreak(showNotifications) {
    return (
        <NewTimer
            timerSeconds={10}
            showNotifications={showNotifications}
            reminderSeconds={10}
            debug={true}
        />
    )
}

export default TestBreak
