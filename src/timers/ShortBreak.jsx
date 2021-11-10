import React from 'react'
import { Timer } from './counter/Timer'

function ShortBreak(showNotifications) {
    return (
        <Timer
            period={{ minutes: 5, seconds: 0 }}
            showNotifications={showNotifications}
        />
    )
}

export default ShortBreak
