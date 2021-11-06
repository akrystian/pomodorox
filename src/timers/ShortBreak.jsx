import React from 'react'
import { Timer } from './counter/Timer'

function ShortBreak() {
    return <Timer period={{ minutes: 0, seconds: 2 }} />
}

export default ShortBreak
