import React from 'react'
import { Timer } from './counter/Timer'

function Regular(showNotifications) {
    return (
        <Timer
            period={{ minutes: 25, seconds: 0 }}
            showNotifications={showNotifications}
        />
    )
}

export default Regular
