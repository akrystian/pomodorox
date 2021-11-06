import React from 'react'
import Timer from './counter/Timer'

function LongBreak() {
    return <Timer period={{ minutes: 10, seconds: 0 }} />
}

export default LongBreak
