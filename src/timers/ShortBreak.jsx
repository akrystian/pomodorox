import React from 'react'
import { NewTimer } from './counter/NewTimer'

function ShortBreak(showNotifications) {
    return (
        <NewTimer
            timerSeconds={5 * 60}
            showNotifications={showNotifications}
            reminderSeconds={2 * 60}
        />
    )
}

export default ShortBreak
