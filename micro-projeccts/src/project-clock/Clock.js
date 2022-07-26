import React from 'react'

import useClock from './useClock'

import "./Clock.css"

const formatTime = (value) =>
    value < 10 ? ("0" + value) : value;

const Clock = () => {
    const delayedTime = useClock("-00:95:00");
    const time = useClock();
    const aheadTime = useClock("00:30:00");

    return (
        <div className="container">
            <div className="clock">Delayed Time :
                <span className="hours">{formatTime(delayedTime.hours)}</span>:
                <span className="minutes">{formatTime(delayedTime.minutes)}</span>:
                <span className="seconds">{formatTime(delayedTime.seconds)}</span>
            </div>
            <div className="clock">Present Time :
                <span className="hours">{formatTime(time.hours)}</span>:
                <span className="minutes">{formatTime(time.minutes)}</span>:
                <span className="seconds">{formatTime(time.seconds)}</span>
            </div>

            <div className="clock"> Ahead Time :
                <span className="hours">{formatTime(aheadTime.hours)}</span>:
                <span className="minutes">{formatTime(aheadTime.minutes)}</span>:
                <span className="seconds">{formatTime(aheadTime.seconds)}</span>
            </div>
        </div>
    )
}

export default Clock