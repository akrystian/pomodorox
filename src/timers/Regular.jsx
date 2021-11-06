import React from 'react'
import { Timer } from './counter/Timer'

function Regular() {
    return <Timer period={{ minutes: 25, seconds: 0 }} />
}

export default Regular
