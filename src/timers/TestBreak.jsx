import React from 'react'
import { NewTimer } from './counter/NewTimer'

function TestBreak(showNotifications) {
    return <NewTimer timerSeconds={5} showNotifications={showNotifications} />
}

export default TestBreak
