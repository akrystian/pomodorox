import React from 'react'
import Timer from './counter/Timer'

function TestBreak(showNotifications) {
    return (
        <Timer
            period={{ minutes: 0, seconds: 5 }}
            showNotifications={showNotifications}
        />
    )
}

export default TestBreak
