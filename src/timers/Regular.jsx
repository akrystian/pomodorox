import React from 'react'
import { NewTimer } from './counter/NewTimer'

function Regular(showNotifications) {
    return (
        <NewTimer
            timerSeconds={25 * 60}
            showNotifications={showNotifications}
        />
    )
}

export default Regular
