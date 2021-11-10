import React from 'react'
import Timer from './counter/Timer'

function LongBreak(showNotifications) {
    return (
        <Timer
            period={{ minutes: 10, seconds: 0 }}
            showNotifications={showNotifications}
        />
    )
}

export default LongBreak
