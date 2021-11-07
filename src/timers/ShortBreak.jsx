import React from 'react'
import { Timer } from './counter/Timer'

function ShortBreak() {
    return <Timer period={{ minutes: 5, seconds: 0 }} />
}

export default ShortBreak
