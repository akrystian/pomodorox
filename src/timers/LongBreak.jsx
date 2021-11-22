import React from 'react'
import { NewTimer } from './counter/NewTimer'

function LongBreak(showNotifications) {
    return (
        <NewTimer
            timerSeconds={10 * 60}
            showNotifications={showNotifications}
        />
    )
}

export default LongBreak
