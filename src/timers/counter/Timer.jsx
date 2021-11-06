import React, { useEffect } from 'react'
import { Counter } from './Counter'
import { useState } from 'react'

export const Timer = ({ period }) => {
    const remainingTime = (initial, remaining) => {
        let result

        if (remaining === undefined || remaining.finished === false) {
            const difference = initial - new Date()

            if (difference > 0) {
                result = {
                    ...remaining,
                    remaining: {
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                    },
                    finished: false,
                }
            } else {
                result = {
                    ...remaining,
                    remaining: {
                        minutes: 0,
                        seconds: 0,
                    },
                    finished: true,
                }
            }
        } else {
            result = remaining
            new Audio('./countdown-sound.mp3')
        }

        return result
    }

    const plus = (minutes, seconds = 0) => {
        return new Date(new Date().getTime() + minutes * 60000 + seconds * 1000)
    }

    const show = () => {
        return (
            <Counter
                minutes={twoSign(remaining.remaining.minutes)}
                seconds={twoSign(remaining.remaining.seconds)}
            />
        )
    }

    const twoSign = (count) => {
        return count >= 10 ? count : '0' + count
    }

    const setTitle = () => {
        document.title =
            twoSign(remaining.remaining.minutes) +
            ' : ' +
            twoSign(remaining.remaining.seconds)
    }

    const [start] = useState(plus(period.minutes, period.seconds))
    const [remaining, setRemaining] = useState(
        remainingTime(start, { finished: false })
    )

    useEffect(() => {
        setTimeout(() => {
            setRemaining(remainingTime(start, remaining))
            setTitle()
        }, 1000)
    })

    return show()
}

export default Timer
